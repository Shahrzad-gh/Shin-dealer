const Product = require("../models/productModel");
//const nanoid  = require('nanoid');

module.exports.addProduct_post = async (req, res) => {
  const { name, count, price, description, reviews, offer, category } = req.body;
  let pictures = [];

  if(req.files.length > 0){
    pictures = req.files.map(file => {return {img : file.filename}})
  }

  try {
    const product = await Product.create({ pictures, name, count, price, description, reviews, offer, category });
    res.status(201).json({ product});
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
