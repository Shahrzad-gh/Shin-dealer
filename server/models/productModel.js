const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
 name:{
    type: String,
    required: [true, 'Please enter your name'],
  },
  picture: {type: String},
  count:{
    type: String,
    required: [true, 'Please enter count'],
  },
  discription: {
    type: String,
  },
});
const Product = mongoose.model('product', productSchema);

module.exports = Product;