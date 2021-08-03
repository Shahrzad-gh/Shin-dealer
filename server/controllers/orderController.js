const Order = require('../models/orderModel');
const Cart = require('../models/cartModel');


module.exports.setOrder_post = async (req, res) => {
  const {basketObj} = req.body;
  Cart.deleteOne({user : res.locals.user}).exec(async (error, result) => {
    if(error) return  res.status(400).json({ error });
    if(result){
      const orderObject = {
        user : res.locals.user,
        items : basketObj.cart.cartItems,
        totalAmount: basketObj.total,
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

      try {
        const order = await Order.create(orderObject);
        return res.status(200).json({order});
      }
      catch(err) {
        //const errors = handleErrors(err);
        res.status(400).json({ err });
      }
    }
  })
}
    
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
  Order.find({_id: req.query.id}).
  exec((error, order) => {
    if(error) return res.status(400).json({ error });
    if(order) {
      res.status(200).json({ order });
    }
  })
}

module.exports.getPaymentStatus_get = async (req, res) => {
  console.log("run")
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