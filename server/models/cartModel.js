const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cartItems: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      count: { type: Number, default: 1 },
      price: { type: Number, required: true}
    }
  ],
}, { timestamps: true });
const Category = mongoose.model('cart', cartSchema);

module.exports = Category;