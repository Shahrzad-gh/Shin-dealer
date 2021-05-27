const Cart = require('../models/cartModel');

module.exports.addItemToCart_post = async (req, res) => {
  const { user, cartItems} = req.body;

  try {
    const cart = await Cart.create({ user, cartItems });
    res.status(201).json({ cart});
    console.log(" Add Successfully ")

  }
  catch(err) {
    console.log("ERROR", err)
    //const errors = handleErrors(err);
    res.status(400).json({ err });
  }
}

