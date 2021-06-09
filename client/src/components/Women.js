import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Popular from "./Popular";
import Footer from "./layout/Footer/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 15,
  },
  typography: { fontFamily: "Almarai", fontSize: "1rem" },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paddingCard: {
    padding: 3,
  },
}));

export default function Collections() {
  const classes = useStyles();

    const handleGetProduct = async () => {
      //const products = await axios.get('/getallproducts');
    }

  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              {/* //////////// */}
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="accesory"
                    height="200"
                    image="https://www.nextgaything.com/wp-content/uploads/2019/02/accesories.jpg"
                    title="اکسسوری"
                  />
                  <CardContent className={classes.paddingCard}>
                    <Typography
                      className={classes.typography}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      اکسسوری
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}>
              {/* /////////////// */}
              {/* //////////// */}
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="shoe"
                    height="200"
                    image="https://image.freepik.com/free-photo/shoes-footwear-woman_1203-7832.jpg"
                    title="کفش"
                  />
                  <CardContent className={classes.paddingCard}>
                    <Typography
                      className={classes.typography}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      کفش
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={4}  onClick={handleGetProduct}>
              {/* //////////// */}
              <Link to="ProductList">
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="clothes"
                      height="200"
                      image="https://bayanbox.ir/download/4997248882443129847/qp-women-clothes.jpg"
                      title="لباس"
                    />
                    <CardContent className={classes.paddingCard}>
                      <Typography
                        className={classes.typography}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        لباس
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          </Grid>
        </div>
        <div>
          <Popular />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/originals/7c/e0/b8/7ce0b8145c2a8150f4b971d18fc48d5c.jpg"
            alt="banner"
          />
        </div>
        <div>
          <Popular />
        </div>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
