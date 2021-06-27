import React, {useState, useEffect} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Cart from '../containers/cart';
import axios from 'axios';

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

  useEffect(() => {
    try {
      axios.get('/getusercartItems', {params: {
        id: "608e7966d9205f2698cde28b"
      }}).then(res => setBasket(res.data.cart.cartItems)).catch(err => console.log(err));
    } catch (error) {
      console.log(error)
    }
  }, []);

  function handlePayment(){

  }

  return (
    <Card className={classes.root}>
      { basket && basket.map((item, index) => 
        <div className={classes.details} key={index}>
          {handlePayment()}
          <Cart data={item.product} count={item.count}/>
          </div>)}
          <div>
          <div className={classes.details}> قابل پرداخت : $</div>
          <Button variant="contained" color="primary" type="submit"> Pay </Button>
          </div>
    </Card>
  )
}

export default Basket
