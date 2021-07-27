const Razorpay = require('razorpay');

const instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_SECRET
})
      module.exports.setPayment = (req, res) => {
        console.log(req.body)
        try{
          instance.orders.create({ amount, currency, receipt, notes }, (err, result) => {
            if(err) {return res.status(500).json(err); }
            return res.status(200).json(result);
          })
        }
        catch(error){
          return res.status(400).json(error);

        }
      }