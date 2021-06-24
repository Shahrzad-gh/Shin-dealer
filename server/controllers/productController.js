const Product = require("../models/productModel");
const cloudinary = require('../utils/cloudinary')

module.exports.addProduct_post = async (req, res) => {
  const { name, count, price, description, reviews, offer, category } = req.body;
  let picture = {img:"", id:""};

  try {
    const result = await cloudinary.uploader.upload(req.file.path)
    picture.img = result.secure_url;
    picture.id= result.public_id;

    const product = await Product.create({ picture , name, count, price, description, reviews, offer, category });
    res.status(201).json({ product});
    console.log("Product Add Successfully ")

  }
  catch(err) {
    console.log("ERROR", err)
    //const errors = handleErrors(err);
    res.status(400).json({ err });
  }

}
module.exports.getProductById_get = async (req, res) => {
  //console.log("id",req.query.id)
  Product.findOne({ _id : req.query.id }).
  exec((error, product) => {
    if(error) return res.status(400).json({ error });
    if(product) {
      res.status(200).json({ product });
    }
  })
}

module.exports.getAllProducts_get = async (req, res) => {
  Product.find({}).
  exec((error, products) => {
    if(error) return res.status(400).json({ error });
    if(products) {
      res.status(200).json({ products });
    }
  })
}
