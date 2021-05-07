const Product = require("../models/productModel");

module.exports.addProduct_post = async (req, res) => {
  const { picture, name, count, price, description } = req.body;
  try {
    const product = await Product.create({ picture, name, count, price, description });
    res.status(201).json({ product: product._id });
    console.log("Product Add Successfully ")

  }
  catch(err) {
    console.log("ERROR", err)
    //const errors = handleErrors(err);
    res.status(400).json({ err });
  }

}

module.exports.addProduct_get = async (req, res) => {

}
