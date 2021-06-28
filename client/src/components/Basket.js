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

  useEffect(() => {
    try {
      //console.log(cookie.get('token'))
      axios.get('/getusercartItems').then(res => setBasket(res.data.cart.cartItems)).catch(err => console.log(err));
    } catch (error) {
      console.log(error)
    }
  }, []);
  return (
    <Card className={classes.root}>
      <div className={classes.typography}> سبد خرید </div>
      { basket && basket.map((item, index) => 
        <div className={classes.details} key={index}>
          <Cart data={item.product} count={item.count}/>
          
          </div>)}
          <div>
          <div className={classes.details}> قابل پرداخت : ${ basket && basket.reduce((a, c)=> a + c.price * c.count, 0) } </div>
          <Button variant="contained" color="primary" type="submit"> Pay </Button>
          </div>
    </Card>
  )
}

export default Basket
