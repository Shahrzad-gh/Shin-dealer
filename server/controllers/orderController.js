const Order = require('../models/orderModel');
const Cart = require('../models/cartModel');
const Razorpay = require("razorpay");

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET
})

module.exports.setOrder_post = async (req, res) => {
  const {basketObj} = req.body;
      const orderObject = {
        user : res.locals.user,
        items : basketObj.cart.cartItems,
        totalAmount: basketObj.total,
        orderStatus: [
          {
            type: 'Ordered',
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

      try {
        const order = await Order.create(orderObject);
        return res.status(200).json({order});
      }
      catch(err) {
        //const errors = handleErrors(err);
        res.status(400).json({ err });
      }
    }
//   })
// }
    
module.exports.getAllOrders_get = async (req, res) => {
  Order.find().
  exec((error, orders) => {
    if(error) return res.status(400).json({ error });
    if(orders) {
      res.status(200).json({ orders });
    }
  })
}

module.exports.getOrder_get = async (req, res) => {
  Order.find({_id: req.params.id}).
  exec((error, order) => {
    if(error) return res.status(400).json({ error });
    if(order) {
      res.status(200).json({ order });
    }
  })
}

module.exports.getOrderStatus_get = async (req, res) => {
  const paymentId = req.query.id
    Cart.deleteOne({user : res.locals.user}).exec(async (error, result) => {
    if(error) return  res.status(400).json({ error });
    if(result){
  instance.payments.fetch(paymentId, (err, result)=>{
    if(err) {return res.status(500).json(err); }
    if(result.status === 'authorized'){
      instance.payments.capture(paymentId, req.query.amount, req.query.currency, (err, paymentStatus) => {
        if (err){return res.status(500).json(err);}
        if(paymentStatus){
          condition = { _id : req.query.orderId };
          action = {"$set" : {
              paymentStatus: "complete",
              isCompleted : true,
              Date : req.query.dt
            }
          };
          Order.findOneAndUpdate(condition, action).exec((err, _order) => {
            if(err){return res.status(500).json(err);}
            if(_order){
              console.log("order update")
            }
          })            
          return res.status(200).json(paymentStatus.status);
        }
      })
    }
  })
}
})
}

module.exports.updateOrderStatus_put = async (req, res) => {
  condition = { _id : req.body.updatedStatus.params.id , "orderStatus.type": req.body.updatedStatus.params.step};
  action = {"$set" : {
    "orderStatus.$.isCompleted" : 
      true    
  // }
  }};
  Order.findOneAndUpdate(condition, action).
  exec((error, order) => {
    if(error) {console.log(error);return res.status(400).json({ error });}
    if(order) {
      res.status(200).json({ order });
    }
  })
}

module.exports.getUserOrdersByUserId_get = async (req, res) => {
  Order.find({user: req.query.userId}).
  exec((error, orders) => {
    if (error) {return res.status(400).json({error})}
    if(orders){
      res.status(200).json({ orders })
    }
  })
}
