const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  totalAmount: {
    type: Number,
    required: true
  },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
      count: { type: Number, required: true},
      payable: { type: Number, required: true}
    }
  ],
  paymentStatus: {
    type: String,
    enum: ['pending', 'completed', 'cancelled', 'refund'],
    required: true,
  },
  paymentType: {
    type: String,
    enum: ['card', 'cod'],
    required: true
  },
  orderStatus: [
    {
      type:{ 
        type:String,
        enum: ['ordered', 'packed', 'shipped', 'delivered'],
        default: 'ordered'
      },
      date: {
        type: Date
      },
      isCompleted:{
        type: Boolean,
        default: false
      }

    }
  ]
}, { timestamps: true });

//mongoose.set('useFindAndModify', false);

const Order = mongoose.model('order', orderSchema);

module.exports = Order;