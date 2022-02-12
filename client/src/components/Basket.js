import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import Cart from "../containers/cart";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
//import CircularProgress from '@mui/material/CircularProgress';
import { getUserCartItems } from "../Store/actions/cartActions";
import { setOrder } from "../Store/actions/orderActions";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  root: {
    padding: 15,
    margin: 20,
    width: "-webkit-fill-available",
    border: " 1px solid lightgray",
    display: "inline-block",
  },
  details: {
    //flexDirection: "column",
    padding: 5,
  },
  typography: {
    fontFamily: "Almarai",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  cover: {
    height: 350,
  },
  list: {
    listStyle: "none",
  },
});

function Basket() {
  const classes = useStyles();
  //const [basket, setBasket] = useState(null);
  //const [loadding, setLoadding] = useState(false);
  //const [signature, setSignature] = useState(null)
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const orderDetails = useSelector((state) => state.orders.orderDetails);

  useEffect(() => {
    dispatch(getUserCartItems());
  }, [dispatch]);

  const handleTotal = () => {
    return cart !== null
      ? cart.cartItems && cart.cartItems.reduce((a, b) => a + b.payable, 0)
      : 0;
  };

  const handlePay = async () => {
    const basketObj = {
      cart,
      total: handleTotal(),
    };
    try {
      dispatch(setOrder(basketObj));
    } catch (err) {
      console.log(err);
    }
  };
  console.log(orderDetails);

  return (
    <Card className={classes.root}>
      <div className={classes.typography}> سبد خرید </div>
      {
        cart !== null ? (
          cart.cartItems &&
          cart.cartItems.map((item, index) => (
            <div className={classes.details} key={index}>
              <Cart
                data={item.product}
                count={item.count}
                payable={item.payable}
              />
            </div>
          ))
        ) : (
          <Typography className={classes.typography}>
            {" "}
            سبد خرید خالی می باشد{" "}
          </Typography>
        )
        //: <CircularProgress />
      }
      <div>
        <div className={classes.details}> قابل پرداخت : ${handleTotal()}</div>
        <Link
          to={{
            pathname: "/paymentPanel",
            query: { total: handleTotal() },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handlePay}
            className={classes.typography}
          >
            ثبت سفارش
          </Button>{" "}
        </Link>
      </div>
    </Card>
  );
}

export default Basket;
