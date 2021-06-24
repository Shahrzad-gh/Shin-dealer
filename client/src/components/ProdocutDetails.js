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
  const [user, setUser] = useState(null);
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
      }}).then(res => setProduct(res)).catch(err => console.log(err));
    } catch (error) {
      console.log(error)
    }    
  }, [])
  
  console.log(product);

  async function fetchUser(id){
    try {
      await axios.get('/getUserById',{
        params: {
        id: id
      }}).then(res => setUser(res)).catch(err => console.log(err))
    } catch (error) {
      console.log(error)
    } 
    return user
  }
  console.log("USER:",user)
  return (
    <>
      {product && (
        <Grid>
          <Card className={classes.root}>
            <div className={classes.details}>
            <CardMedia
              className={classes.cover}
              alt={product.data.product.name}
              image={product.data.product.picture.img}/>
              <CardActions className={classes.details}>
                <Button variant="contained" color="primary">
                  <Typography className={classes.typography}> افزودن به سبد خرید</Typography>
                </Button>
              </CardActions>
              </div>

              </Card>
              <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent >
                  <div>{product.data.product.name}</div>
                  <div>تومان {product.data.product.price}</div> 
                  <div>{product.data.product.description}</div> 
                </CardContent>
              </div>
              </Card>
              {product.data.product.reviews && product.data.product.reviews.map(index =>    {fetchUser(index.userId)
                (<li className={classes.list} key={index.userId}><Card className={classes.root}>
                  <div>  {user} : {index.review} </div>
                </Card></li> )
               })}
        </Grid>
        )}
</>
  );
}
