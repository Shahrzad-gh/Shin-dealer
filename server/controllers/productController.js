const Product = require("../models/productModel");
//const nanoid  = require('nanoid');
const multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
  cb(null, 'public')
},
filename: function (req, file, cb) {
  cb(null, Date.now() + '-' +file.originalname )
}
})



var upload = multer({ storage: storage }).array('file')
console.log("UPLOAD", upload)


module.exports.addProduct_post = async (req, res) => {
  const { name, count, price, description, reviews, offer, category } = req.body;
  let pictures = [];
  console.log (req);


  // if(req.files.length > 0){
  //   pictures = req.files.map((file) => {
  //     return { img : file.path }      
  //   })
  // }

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

module.exports.getAllProducts_get = async (req, res) => {
  Product.find({}).
  exec((error, products) => {
    if(error) return res.status(400).json({ error });
    if(products) {
      res.status(200).json({ products });
    }
  })
}
