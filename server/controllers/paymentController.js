const Razorpay = require('razorpay');

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET
})

module.exports.setPayment = async (req, res) => {
        const {amount, currency, receipt, notes} = req.body.data.params
        try{
          await instance.orders.create({ amount, currency, receipt, notes }, (err, payment) => {
            if(err) {return res.status(500).json(err); }
            return res.status(200).json({payment});
          })
        }
        catch(error){
          return res.status(400).json(error);

        }
      }