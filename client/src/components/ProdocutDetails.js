import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles({
  root: {
    margin: 10,
    padding: 15,
    marginTop: 10,
    width: 200,
    border:' 1px solid lightgray'
    },
    details: {
      display: "flex",
      flexDirection: "column",
    },
    cover: {
      height: 140,
    },
});

export default function ProductList(props) {
  const classes = useStyles();
  const [product, setProduct] = useState(null);
  console.log(props.match.params.id)

    // const handleAddToBasket = async (e) => {
  //   e.preventDefault();
  //   console.log(e.target)
  //   setCartItem({ ...cartItem, [e.target.name]: e.target.value })
  //   console.log("cart", cartItem)

  //   const data = {
  //     // user,  
  //     cartItem
  //    };
  //   try{
  //    //await axios.post('/addtocart', data);  
  //   }catch(err){
  //     console.error(err)
  //   }
  // }
  useEffect(() => {
    try {
      axios.get('/getProductById',{
        params: {
        id: props.match.params.id
      }}).then(res => setProduct(res)).catch(err => console.log(err))
    } catch (error) {
      console.log(error)
    }
  }, [])
  console.log(product)
  return (
    <Grid>
      {product && (
        <Grid>
          <Card className={classes.root}>
            <div lassName={classes.details}>
            <CardMedia
                      className={classes.cover}

              alt={product.data.product.name}
              image={product.data.product.picture.img}/>
              </div>
          </Card>
        </Grid>
        )}
        </Grid>

  );
}
