import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography";
import ProductReview from "../components/ProductReview";
import { useSelector, useDispatch } from 'react-redux'
import { getProductDetailsById } from "../Store/actions/productActions";
const useStyles = makeStyles({
  root: {
    margin: 10,
    padding: 15,
    marginTop: 10,
    width: 315,
    border:' 1px solid lightgray',
    display: 'inline-block'
    },
    details: {
      flexDirection: "column",
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

export default function ProductList(props) {
  const classes = useStyles();
  //const [product, setProduct] = useState(null);
  const [cartItem, setCartItem] = useState({
    productId:'',
    count: 1 });
    const dispatch = useDispatch()

  const product = useSelector((state) => state.product)

    const handleAddToBasket = async (e) => {
    e.preventDefault();
    setCartItem({...cartItem, [e.target.name]: e.target.value })

    const data = {
      //user: "608cf207d655320b7c7f58b2",  
      cartItem : {
        count: 1, 
        product: product.data.product._id,
        price:product.data.product.price
      }
     };
    try{
     await axios.post('/addtocart', data);  
    }catch(err){
      console.error(err)
    }
  }

  useEffect(() => {
    const { id } = props.match.params;
    const payload = {
      params: {
        id,
      },
    };
    dispatch(getProductDetailsById(payload));
  });

  return (
    <>
      {product && (
        <Grid>
          <Card className={classes.root} >
            <CardContent>
              <form onSubmit={handleAddToBasket}>
            <div className={classes.details}>
            <CardMedia component="img"
              className={classes.cover}
              alt={product.productDetails.name}
              name={product.productDetails.name}
              image={product.productDetails.picture && product.productDetails.picture.img}
              />
            <div className={classes.details}>
                <CardContent >
                  <div name="name">{product.productDetails.name}</div>
                  <div name="price">تومان {product.productDetails.price}</div> 
                  <div name="description">{product.productDetails.description}</div> 
                </CardContent>
              </div>
              <CardActions className={classes.details}>
                <Button variant="contained" color="primary" type="submit">
                  <Typography className={classes.typography}> افزودن به سبد خرید</Typography>
                </Button>
              </CardActions>
              </div>
              </form>
              </CardContent>
              </Card>
              <Card className={classes.root}>

              </Card>
              {product.productDetails.reviews && product.productDetails.reviews.map(index =>    
                (<li className={classes.list} key={index.userId}><Card className={classes.root}>
                  <ProductReview data={index}/>
                </Card></li> )
               )}
        </Grid>
        )}
</>
  );
}
