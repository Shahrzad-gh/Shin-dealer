const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
 name:{
    type: String,
    required: [true, 'Please enter your name'],
  },
  picture: {
      img:{type: String},
      id:{type: String}
    },
  count:{
    type: String,
    required: [true, 'Please enter count'],
  },
  price:{
    type: Number,
    required: [true, 'Please enter price'],
  },
  discription: {
    type: String,
  },
  offer:{type:Number},
  reviews:[
    {
      userId:{type: mongoose.Schema.Types.ObjectId, ref:'User'},
      review:{Type: String}
    }
],
  category:{type: mongoose.Schema.Types.ObjectId, ref:'Category', required: true}
});
const Product = mongoose.model('product', productSchema);

module.exports = Product;