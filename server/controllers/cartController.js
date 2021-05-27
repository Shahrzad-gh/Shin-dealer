const Cart = require('../models/cartModel');

module.exports.addItemToCart_post = (req, res) => {
  const { user, cartItems} = req.body;

  let condition, action;

    Cart.findOne({user})
    .exec(async (error, cart) => {
      console.log("ERRR1", error)
      console.log("CART1", cart)
      if(error) return res.status(400).json({ error });      
      if(cart){
        const product = req.body.cartItems.product;
        const item = cart.cartItems.find( c => c.product = product);
        if(item){
          condition = { user, "cartItems.product": product };
          action = {"$set" : {
            "cartItems" : {
              ...req.body.cartItems,
              count: item.count + req.body.cartItems.count
            }
          }};
  
          Cart.findByIdAndUpdate(condition, action).exec((error, _cart) => {
            console.log("ERRR2", error)
            console.log("CART2", _cart)

            if(error) return res.status(400).json({ error });
            if(_cart){
              res.status(201).json({ _cart });
            }
          })

        }else{
          condition = { user };
          action = {"$push" : {
            "cartItems" : req.body.cartItems,
          }};
  
          Cart.findByIdAndUpdate(condition, action ).exec((error, _cart) => {
            console.log("ERRR3", error)
            console.log("CART3", _cart)
            if(error)return res.status(400).json({ error });

            if(_cart){
              res.status(201).json({ _cart });
            }
          })
        }
      }else{
        try {
          const cart = await Cart.create({ user, cartItems });
          res.status(201).json({ cart });
          console.log(" Add Successfully ")    
        }
        catch(err) {
          console.log("ERROR", err)
          //const errors = handleErrors(err);
          res.status(400).json({ err });
        }
      }
    }
  )

}

