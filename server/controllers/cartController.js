const Cart = require('../models/cartModel');

module.exports.addItemToCart_post = (req, res) => {
  const { cartItem } = req.body;
  const user = res.locals.user._id;
  let condition, action;

    Cart.findOne({user})
    .exec(async (error, cart) => {
      if(error) return res.status(400).json({ error });      
      if(cart){
        const product = req.body.cartItem.product;
        const item = cart.cartItems.find( c => c.product == product);
        if(item){
          condition = { user, "cartItems.product": product };
          action = {"$set" : {
            "cartItems.$" : {
              ...req.body.cartItem,
              count: item.count + req.body.cartItem.count
            }
          }};
          Cart.findOneAndUpdate(condition, action).exec((error, _cart) => {
            if(error) return res.status(400).json({ error });
            if(_cart){
              res.status(201).json({ _cart });
            }
          })

        }else{
          condition = { user };
          action = {"$push" : {
            "cartItems" : cartItem,
          }};
          Cart.findOneAndUpdate(condition, action).exec((error, _cart) => {
            if(error)return res.status(400).json({ error });
            if(_cart){
              res.status(201).json({ _cart });
            }
          })
        }
      }else{
        try {
          const cart = await Cart.create({ user, cartItem });
          res.status(201).json({ cart });
        }
        catch(err) {
          //const errors = handleErrors(err);
          res.status(400).json({ err });
        }
      }
    }
  )

}

module.exports.getUserCartItems_get = (req, res) => {
  res.locals.user && Cart.findOne({ user : res.locals.user._id }).
  exec((error, cart) => {
    if(error) return res.status(400).json({ error });
    if(cart) {
      res.status(200).json({ cart });
    }
  })
}

