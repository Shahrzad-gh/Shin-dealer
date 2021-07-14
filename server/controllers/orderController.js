const Order = require('../models/orderModel');
const Cart = require('../models/cartModel');
const Razorpay = require('razorpay');

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET
})

module.exports.setOrder_post = async (req, res) => {
  Cart.deleteOne({user : res.locals.user}).exec(async (error, result) => {
    if(error) return  res.status(400).json({ error });
    if(result){
      const orderObject = {
        user : res.locals.user,
        items : req.body.basket,
        totalAmount: req.body.total,
        orderStatus: [
          {
            type: 'ordered',
            isCompleted: true
          },
          {
            type: 'packed',
            isCompleted: false
          },
          {
            type: 'shipped',
            isCompleted: false
          },
          {
            type: 'delivered',
            isCompleted: false
          },
        ],
        paymentStatus: "pending",
        paymentType: "card",
      };
      const currency ="EUR"
      const amount = parseInt(orderObject.totalAmount); 
      const notes = 'Description'
      try {
        const order = await Order.create(orderObject);
        const receipt = order._id + ""
        instance.orders.create({ amount, currency, receipt, notes }, (err, result) => {
          if(err) {return res.status(500).json(err); }
          return res.status(200).json(result);
        })
      }
      catch(err) {
        console.log("ERROR", err)
        //const errors = handleErrors(err);
        res.status(400).json({ err });
      }
    }
  })
}
    
module.exports.getAllOrders_get = async (req, res) => {
  Order.find({user: res.locals.user._id}).
  exec((error, order) => {
    if(error) return res.status(400).json({ error });
    if(order) {
      res.status(200).json({ order });
    }
  })
}

module.exports.getOrder_get = async (req, res) => {
  Order.find({_id: req.query.id}).
  exec((error, order) => {
    if(error) return res.status(400).json({ error });
    if(order) {
      res.status(200).json({ order });
    }
  })
}

module.exports.getPaymentStatus_get = async (req, res) => {
  instance.payments.fetch(req.query.id, (err, result)=>{
    if(err) {return res.status(500).json(err); }
    if(result.status === 'authorized'){
      instance.payments.capture(req.query.id, req.query.amount, req.query.currency, (err, paymentStatus) => {
        if (err){return res.status(500).json(err);}
        if(paymentStatus){
          condition = { _id : req.query.orderId };
          action = {"$set" : {
              paymentStatus: "complete"
            }
          };
          Order.findOneAndUpdate(condition, action).exec((err, _order) => {
            if(err){return res.status(500).json(err);}
            if(_order){
              console.log("order update")
            }
          })            
          return res.status(200).json(paymentStatus);
        }
      })
    }
  })
}