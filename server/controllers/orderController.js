const Order = require('../models/orderModel');
const Cart = require('../models/cartModel');

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

      try {
        const order = await Order.create(orderObject);
        res.status(201).json({ order });
      }
      catch(err) {
        console.log("ERROR", err)
        //const errors = handleErrors(err);
        res.status(400).json({ err });
      }
    }
  }

)};

module.exports.getOrder_get = async (req, res) => {
  Order.find({user: res.locals.user._id}).
  exec((error, order) => {
    if(error) return res.status(400).json({ error });
    if(order) {
      res.status(200).json({ order });
    }
  })
}