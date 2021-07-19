import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import axios from 'axios';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetailsById } from "../Store/actions/productActions";


const useStyles = makeStyles({
  root: {
    marginTop: 10,
    minWidth: 275,
    display: 'inline-flex'
  },
  typography: {
    fontFamily: "Almarai",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
  cover: {
    width: 50,
    height: 50,
  },
});

export default function Cart(props) {
  console.count("props",props)

  const classes = useStyles();
  let productCount = props.count
  let payable = props.payable
  const dispatch = useDispatch()

  const product = useSelector((state) => state.product)
  const  id  = props.data;
  const payload = {
    params: {
      id,
    },
  };
  useEffect(() => {
    dispatch(getProductDetailsById(payload));
  },[dispatch], payload);

  
  const handleDecrement =() => {
    const data = {
      cartItem : {
        count: - 1, 
        product: product._id,
        price: product.price
      }
    }
    try {
      axios.post('/addtocart', data)
    } catch (error) {
      console.log(error)
    }
  }

  function handleIncrement() {
    const data = {
      cartItem : {
        count: 1, 
        product: product._id,
        price: product.price,
        payable: product.price,
      }
    }
    try {
      axios.post('/addtocart', data)
    } catch (error) {
      console.log(error)
    } 
  }

  function handleRemove(){
    const data = {
      cartItem : {
        product: product._id,
      }
    }
    try {
      axios.post('/removecartItem', data)
    } catch (error) {
      console.log(error)
    } 
  }

  return (
    <Card className={classes.root} variant="outlined">
      {product.productDetails && <CardContent className={classes.root}>
        <div>
        <CardMedia component="img"
        className={classes.cover}
        image={product.productDetails.picture && product.productDetails.picture.img}
        alt="img"
        >
        </CardMedia>
        </div>
        <div className={classes.typography}>
          <div > نام کالا : {product.productDetails.name}</div>
          <div> قیمت : {product.productDetails.price}</div>
          <div> تعداد : {productCount}</div>
        </div>
        <div className={classes.title} > جمع کل : {payable}$ 
        <AddIcon onClick={handleIncrement}/> {productCount} <RemoveIcon onClick={handleDecrement}/>
        <DeleteIcon onClick={handleRemove}/></div>      
      </CardContent>}
    </Card>
  );
}
