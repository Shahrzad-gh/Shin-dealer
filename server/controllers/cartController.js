const Cart = require('../models/cartModel');

module.exports.addItemToCart_post = (req, res) => {
  const { cartItem } = req.body;
  cartItem.payable = cartItem.price;
  const user = res.locals.user._id;

  let condition, action;
    Cart.findOne({user})
    .exec(async (error, cart) => {
      if(error) {return res.status(400).json({ error });}      
      if(cart){
        const product_id = req.body.cartItem.product;
        const item = cart.cartItems.find( c => c.product == product_id);
        if(item){
          condition = { user, "cartItems.product": product_id };
          action = {"$set" : {
            "cartItems.$" : {
              ...req.body.cartItem,
              count: item.count + req.body.cartItem.count,
              payable: item.price * (item.count + req.body.cartItem.count)
            }
          }};
          Cart.findOneAndUpdate(condition, action).exec((error, _cart) => {
            if(error) { return res.status(400).json({ error });}
            if(_cart){
              res.status(201).json({ _cart });
            }
          })

        }else{
          condition = { user };
          action = {"$push" : {
            "cartItems" : cartItem,
            payable: cartItem.price
          }};
          Cart.findOneAndUpdate(condition, action).exec((error, _cart) => {
            if(error) { return res.status(400).json({ error });}
            if(_cart){
              res.status(201).json({ _cart });
            }
          })
        }
      }else{
        try {
          const cartItems = cartItem
          const cart = await Cart.create({ user, cartItems });
          res.status(201).json({ cart });
        }
        catch(err){
          return res.status(400).json({ error });
        }
      }
    }
  )
}

module.exports.getUserCartItems_get = (req, res) => {
  console.log(res.locals.user._id)
  Cart.findOne({ user : res.locals.user._id }).
  exec((error, cart) => {
    if(error) {return res.status(400).json({ error });}
    if(cart) {
      console.log(cart)
      res.status(200).json({ cart });
    }
    if(cart === null)
    res.status(200).json({ cart });
  })
}

module.exports.removeCartItem_post = (req, res) => {
  const { cartItem } = req.body;
  const user = res.locals.user._id;
  const product = req.body.cartItem.product;

      condition = { user, "cartItems.product": product };
      action = {"$pull" : {
        "cartItems" : {
          product
        }
      }};
      Cart.findOneAndUpdate(condition, action).exec((error, _cart) => {
        if(error) return res.status(400).json({ error });
        if(_cart){
          res.status(201).json({ _cart });
        }
      })
}