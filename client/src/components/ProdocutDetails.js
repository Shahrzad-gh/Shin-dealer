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
import CardActionArea from '@material-ui/core/CardActionArea';

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
  const [product, setProduct] = useState(null);
  const [cartItem, setCartItem] = useState({
    productId:'',
    count: 1 });

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
    try {
      axios.get('/getProductById',{
        params: {
        id: props.match.params.id
      }}).then(res => setProduct(res)).catch(err => console.log(err));
    } catch (error) {
      console.log(error)
    }    
  }, [])
  
  return (
    <>
      {product && (
        <Grid>
          <Card className={classes.root} >
            <CardContent>
              <form onSubmit={handleAddToBasket}>
            <div className={classes.details}>
            <CardMedia
              className={classes.cover}
              alt={product.data.product.name}
              name={product.data.product.name}
              image={product.data.product.picture.img}
              />
            <div className={classes.details}>
                <CardContent >
                  <div name="name">{product.data.product.name}</div>
                  <div name="price">تومان {product.data.product.price}</div> 
                  <div name="description">{product.data.product.description}</div> 
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
              {product.data.product.reviews && product.data.product.reviews.map(index =>    
                (<li className={classes.list} key={index.userId}><Card className={classes.root}>
                  <ProductReview data={index}/>
                </Card></li> )
               )}
        </Grid>
        )}
</>
  );
}
