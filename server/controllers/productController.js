const Product = require("../models/productModel");
const cloudinary = require('../utils/cloudinary');

module.exports.addProduct_post = async (req, res) => {
  const { name, count, price, description, reviews, offer, category } = req.body;
  let picture = {img:"", id:""};

  cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUDNAME,
    api_key : process.env.CLOUDINARY_APIKEY,
    api_secret : process.env.CLOUDINARY_APISECRET,
  });
  
  try {
    const result = await cloudinary.uploader.upload(req.file.path)
    picture.img = result.secure_url;
    picture.id= result.public_id;

    const product = await Product.create({ picture , name, count, price, description, reviews, offer, category });
    res.status(201).json({ product});
    //res.render('/admin')
    //console.log("Product Add Successfully ")

  }
  catch(err) {
    console.log("ERROR", err)
    //const errors = handleErrors(err);
    res.status(400).json({ err });
  }

}
module.exports.getProductById_get = async (req, res) => {
  Product.findOne({ _id : req.params.id }).
  exec((error, product) => {
    if(error) {console.log(error); return res.status(400).json({ error })};
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
module.exports.getProductsByCategory_get = async (req, res) => {
  Product.find({category: req.params.id}).
  exec((error, products) => {
    if(error) return res.status(400).json({ error });
    if(products) {
      res.status(200).json({ products });
    }
  })
}

module.exports.getproductsByCategoryASD_get = (req, res) => {
  Product.find({category: req.query.category}).
  exec((error, products) => {
    if(error) return res.status(400).json({ error });
    if(products) {
      products.sort((a,b) =>  {return a.price - b.price;})
      res.status(200).json({ products });
    }
  })
}

module.exports.getproductsByCategoryDSD_get = (req, res) => {
  Product.find({category: req.query.category}).
  exec((error, products) => {
    if(error) return res.status(400).json({ error });
    if(products) {
      products.sort((a,b) =>  {return b.price - a.price;})
      res.status(200).json({ products });
    }
  })
}