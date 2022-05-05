import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ProductReview from "../components/ProductReview";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetailsById } from "../Store/actions/productActions";
import { addItemToCart } from "../Store/actions/cartActions";
import Rating from "@mui/lab/Rating";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import authContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/lab/Alert";
import Breadcrumbs from "./layout/BreadCramp";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const useStyles = makeStyles({
  root: {
    margin: 10,
    padding: 15,
    marginTop: 10,
    border: " 1px solid lightgray",
    display: "inline-block",
  },
  details: {
    flexDirection: "column",
  },
  typography: {
    fontFamily: "Almarai !important",

    fontSize: "1rem !important",
    fontWeight: "normal",
  },
  cover: {
    height: 350,
  },
  thumb: {
    width: "auto",
    height: 50,
  },
  list: {
    listStyle: "none",
  },
  margin: {
    marginBottom: 10,
    width: "60%",
    height: 10,
    borderRadius: 25,
  },
  display: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paperRoot: {
    flexGrow: 1,
    margin: 10,
  },
  tabContent: {
    direction: "rtl",
  },
  container: {
    padding: 20,
    display: "flex",
    flexDirection: "column",
  },
  cardStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardStylePic: {
    display: "flex",
    width: "30vw",
    flexDirection: "row",
    justifyContent: "space-around",
    position: "relative",
  },
  picColumn: {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
  },
  btnPic: {
    position: "absolute",
    zIndex: 100,
    width: "70%",
    left: 0,
    top: "calc(50% - 20px)",
  },
  btnPicArrowPre: {
    left: 0
  },
  row: {
    display: "flex",
    flexWrap: "wrap"
  },
  dragablePics: {
    maxWidth: "500px",
    position: "relative",
    margin: "auto",

  },
  picSlide: {
    position: "relative",
    display: "none",
    left: 0,
    top: 0
  },
  PicSlideActive: {
    display: "block",

  }
});

export default function ProductDetails(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const productInfo = product.productDetails[props.match.params.id];
  console.log("p", productInfo);
  const [value, setValue] = React.useState(2);
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const {
    // vertical, horizontal,
    open,
  } = state;

  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    setValue(2);
    const { id } = props.match.params;
    const payload = {
      params: {
        id,
      },
    };
    console.log("payload", payload);
    dispatch(getProductDetailsById(payload));
  }, [dispatch, props.match.params]);

  const handleAddToBasket = async (e) => {
    e.preventDefault();
    const payload = {
      params: {
        cartItem: {
          product: productInfo._id,
          price: productInfo.price,
          count: 1,
        },
      },
    };
    dispatch(addItemToCart(payload));
  };
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  return (
    <authContext.Consumer>
      {(user) =>
        productInfo && (
          <Grid>
            <Snackbar autoHideDuration={6000} open={open} onClose={handleClose}>
              <Alert onClose={handleClose} variant="filled" severity="success">
                <Typography className={classes.typography}>
                  با موفقیت به سبد خرید اضافه شد. بررسی نمایید
                </Typography>
              </Alert>
            </Snackbar>
            <Breadcrumbs />
            <div className={classes.container}>
              <CardContent>
                <form onSubmit={handleAddToBasket} style={{ display: "flex" }}>
                  <div className={classes.row}>
                    <div className={classes.cardStylePic}>
                      <div className={classes.picColumn}>
                        <ul>
                          {/*{productInfo.picture?.img?.map(p => ( */}
                          <li>
                            <CardMedia
                              component="img"
                              className={classes.thumb}
                              alt={productInfo.name}
                              name={productInfo.name}
                              image={productInfo.picture && productInfo.picture.img}
                            /></li>
                          <li>
                            <CardMedia
                              component="img"
                              className={classes.thumb}
                              alt={productInfo.name}
                              name={productInfo.name}
                              image={productInfo.picture && productInfo.picture.img}
                            /></li>
                          <li>
                            <CardMedia
                              component="img"
                              className={classes.thumb}
                              alt={productInfo.name}
                              name={productInfo.name}
                              image={productInfo.picture && productInfo.picture.img}
                            /></li>
                          <li>
                            <CardMedia
                              component="img"
                              className={classes.thumb}
                              alt={productInfo.name}
                              name={productInfo.name}
                              image={productInfo.picture && productInfo.picture.img}
                            /></li>


                          {/* ))} */}
                        </ul>
                      </div>
                      <div className={classes.btnPic}>
                        <button className={classes.btnPicArrowPre}>
                          <ArrowBackIosIcon />
                        </button>
                        <button className={classes.btnPicArrowNex}>
                          <ArrowForwardIosIcon />
                        </button>
                      </div>
                      <div className={classes.dragablePics}>
                        <div className={classes.picSlide}>
                          <CardMedia
                            component="img"
                            className={classes.cover}
                            alt={productInfo.name}
                            name={productInfo.name}
                            image={productInfo.picture && productInfo.picture.img}
                          />
                        </div>
                        <div className={classes.picSlide}>
                          <CardMedia
                            component="img"
                            className={classes.cover}
                            alt={productInfo.name}
                            name={productInfo.name}
                            image={productInfo.picture && productInfo.picture.img}
                          />
                        </div>
                        <div className={classes.picSlide}>
                          <CardMedia
                            component="img"
                            className={classes.cover}
                            alt={productInfo.name}
                            name={productInfo.name}
                            image={productInfo.picture && productInfo.picture.img}
                          />
                        </div>
                        <div className={classes.picSlide}>
                          <CardMedia
                            component="img"
                            className={classes.cover}
                            alt={productInfo.name}
                            name={productInfo.name}
                            image={productInfo.picture && productInfo.picture.img}
                          />
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className={classes.details}>
                    <CardContent>
                      <div name="name">{productInfo.name}</div>
                      <div name="price">تومان {productInfo.price}</div>
                      <div name="description">
                        {productInfo.description}
                      </div>
                    </CardContent>
                    <CardActions className={classes.details}>
                      {user.isLoggedIn ? (
                        <Button
                          onClick={handleClick({
                            vertical: "top",
                            horizontal: "center",
                          })}
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          <Typography className={classes.typography}>
                            {" "}
                            افزودن به سبد خرید
                          </Typography>
                        </Button>
                      ) : (
                        <Link to="/Signin">
                          <Button variant="contained" color="primary">
                            <Typography className={classes.typography}>
                              {" "}
                              Sign in{" "}
                            </Typography>
                          </Button>
                        </Link>
                      )}
                      {/* <Button variant="contained" color="primary" type="submit">
                  <Typography className={classes.typography}> افزودن به سبد خرید</Typography>
                </Button> */}
                    </CardActions>
                  </div>
                </form>
              </CardContent>
              <Card className={classes.root}>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Typography component="legend">Raiting</Typography>
                  <Rating name="read-only" value={value} readOnly />
                </Box>
                <Box className={classes.display}>
                  {/* add label for raiting */}
                  <Typography className={classes.typography}>
                    ارزش خرید
                  </Typography>
                  <LinearProgress
                    className={classes.margin}
                    variant="determinate"
                    value={35}
                    width="35%"
                  />
                  <Typography className={classes.typography}>
                    کیفیت ساخت
                  </Typography>
                  <LinearProgress
                    className={classes.margin}
                    variant="determinate"
                    value={50}
                  />
                  <Typography className={classes.typography}>
                    طراحی و زیبایی
                  </Typography>
                  <LinearProgress
                    className={classes.margin}
                    variant="determinate"
                    value={15}
                  />
                  <Typography className={classes.typography}>
                    سهولت استفاده و حمل نقل
                  </Typography>

                  <LinearProgress
                    className={classes.margin}
                    variant="determinate"
                    value={45}
                  />
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
            </div>
            {productInfo.reviews &&
              productInfo.reviews.map((item, index) => (
                <li className={classes.list} key={item.userId}>
                  <ProductReview
                    key={item.userId}
                    userId={item.userId}
                    review={item.review}
                  />
                </li>
              ))}
          </Grid>
        )
      }
    </authContext.Consumer>
  );
}
