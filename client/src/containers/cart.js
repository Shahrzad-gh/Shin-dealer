import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from 'axios';

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
  const classes = useStyles();
  const [product, setProduct] = useState(null);
  const productCount = props.count;
  // const bull = <span className={classes.bullet}>•</span>;
  useEffect(() => {
    try {
      axios.get('/getProductById',{
        params: {
        id: props.data
      }}).then(res => setProduct(res.data.product)).catch(err => console.log(err));
    } catch (error) {
      console.log(error)
    }    
  }, [])

  function handlePay(){
    const price = product.price;
    const count = productCount;
    return price * count;
  }
  
  return (
    <Card className={classes.root} variant="outlined">
      {product && <CardContent className={classes.root}>
        <div>
        <CardMedia
        className={classes.cover}
        image={product.picture.img}
        alt="img"
        >
        </CardMedia>
        </div>
        <div className={classes.typography}>
          <div > نام کالا : {product.name}</div>
          <div> قیمت : {product.price}</div>
          <div> تعداد : {productCount}</div>
        </div>
        <div className={classes.title} > جمع کل : {handlePay()}$ </div>
      </CardContent>}
    </Card>
  );
}
