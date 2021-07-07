import React, {useState, useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Cart from '../containers/cart';
import axios from 'axios';
import cookie from 'js-cookie';

const useStyles = makeStyles({
  root: {
    padding: 15,
    marginTop: 10,
    width: 300,
    border:' 1px solid lightgray',
    display: 'inline-block'
    },
    details: {
      //flexDirection: "column",
      padding: 5,
    },
    typography: {
      fontFamily: "Almarai",
      fontSize: "1rem",
      fontWeight: 'bold'
    },
    cover: {
      height: 350,
    },
    list:{
      listStyle: 'none'
    }
});

function Basket() {
  const classes = useStyles();
  const [basket, setBasket] = useState(null);
  const [paymentOption, setPaymentOption] = useState()
  useEffect(() => {
    try {
      //console.log(cookie.get('token'))
      axios.get('/getusercartItems').then(res => setBasket(res.data.cart.cartItems)).catch(err => console.log(err));
    } catch (error) {
      console.log(error)
    }
  }, []);
  const handleTotal = () => {
    return basket && basket.reduce((a, b)=> a + b.payable, 0)
  }
  const handlePay = async () => {

    const basketObj = {
      basket,
      total : handleTotal()
    }
    try{
      await axios.get('/auth');
      axios.post('/setOrder', basketObj).then(res => setPaymentOption(res)).catch(err => console.log(err))
    }catch(err){console.log(err)}
  
var options = {
  key: "rzp_test_Tb9TLvCcWoJY1q",
  amount: "500",
  currency: "INR",
  name: "Fashion",
  description: "Test Transaction",
  image: "https://example.com/your_logo",
  //order_id: "60e4311c64676c0d5415b6c6", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  handler: function (response){
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature)
  },
  prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "9999999999"
  },
  notes: {
      address: "Razorpay Corporate Office"
  },
  theme: {
      color: "#3399cc"
  }
};
var rzp1 = new window.Razorpay(options);
rzp1.open()
rzp1.on('payment.failed', function (response){
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
});
  }
  return (
    <Card className={classes.root}  >
      <div className={classes.typography}> سبد خرید </div>
      { basket && basket.map((item, index) => 
        <div className={classes.details} key={index}>
          <Cart data={item.product} count={item.count} payable={item.payable}/>
          
          </div>)}
          <div>
          <div className={classes.details}> قابل پرداخت : ${ handleTotal() } </div>
          <Button variant="contained" color="primary" type="submit" onClick={handlePay}> Pay </Button>
          </div>
    </Card>
  )
}

export default Basket
