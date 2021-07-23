import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
import {addItemToCart} from "../Store/actions/cartActions"
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
      fontWeight: 'normal'
    },
    cover: {
      height: 350,
    },
    list:{
      listStyle: 'none'
    },
    margin:{
      marginBottom:10,
      width: '60%',
      height: 10,
      borderRadius: 25
    },
    display:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    paperRoot: {
      flexGrow: 1,
      margin: 10,
    },
    tabContent:{
      direction: 'rtl'

    }
});

export default function ProductDetails(props) {
  const classes = useStyles();
    const dispatch = useDispatch()
  const product = useSelector((state) => state.product)
  const productInfo = product.productDetails[props.match.params.id];
  
  const [value, setValue] = React.useState(2);

  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    const { id } = props.match.params;
    const payload = {
      params: {
        id,
      },
    };
    dispatch(getProductDetailsById(payload));
    
  },[dispatch, props.match.params]);

  const handleAddToBasket = async (e) => {
    e.preventDefault();

   const payload = {
      params : {
        cartItem : {
        product: product.productDetails._id,
        price : product.productDetails.price,
        count: 1} 
      }
    }
    dispatch(addItemToCart(payload));
  }

  return (
    <>
      {productInfo && (
        <Grid>
          <Card className={classes.root} >
            <CardContent>
              <form onSubmit={handleAddToBasket}>
            <div className={classes.details}>
            <CardMedia component="img"
              className={classes.cover}
              alt={productInfo.name}
              name={productInfo.name}
              image={productInfo.picture && productInfo.picture.img}
              />
            <div className={classes.details}>
                <CardContent >
                  <div name="name">{productInfo.name}</div>
                  <div name="price">تومان {productInfo.price}</div> 
                  <div name="description">{productInfo.description}</div> 
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

              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Raiting</Typography>
                <Rating name="read-only" value={value} readOnly />
              </Box>
                <Box className={classes.display}>
                   {/* add label for raiting */}
                   <Typography className={classes.typography}>ارزش خرید</Typography>
                  <LinearProgress className={classes.margin} variant="determinate" value={35} width="35%"/>
                <Typography className={classes.typography}>کیفیت ساخت</Typography>
                <LinearProgress className={classes.margin} variant="determinate" value={50} />
                <Typography className={classes.typography}>طراحی و زیبایی</Typography>
                <LinearProgress className={classes.margin} variant="determinate" value={15} />
                <Typography className={classes.typography}>سهولت استفاده و حمل نقل</Typography>

                <LinearProgress className={classes.margin} variant="determinate" value={45} />
                </Box>

              </Card>
              <Paper className={classes.paperRoot}>
      <Tabs
        value={tabValue}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        className={classes.tabContent}
      >
        <Tab className={classes.typography} label="مشخصات" />
        <Tab className={classes.typography} label="نقد و بررسی" />
        <Tab className={classes.typography} label="نظرات" />
        <Tab className={classes.typography} label="سوالات" />
      </Tabs>
    </Paper>

              {productInfo.reviews && productInfo.reviews.map((item , index) =>    
                (<li className={classes.list} key={item.userId}>
                    <ProductReview key={item.userId} userId={item.userId} review={item.review}/>
                </li> )
               )}


        </Grid>
        )}
</>
  );
}
