import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Popular from "./Popular";
import Footer from "./layout/Footer/Footer";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 15,
  },
  typography: { fontFamily: "Almarai !important", fontSize: "1rem !important" },
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

  return (
    <React.Fragment>
      <Container maxWidth="xl">
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <Link to={{ pathname: "WomenAccesories", data: "" }}>
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
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link to={{ pathname: "WomenShoes", data: "" }}>
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
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Link
                to={{
                  pathname: "WomenCloths",
                  state: { cat_id: "60daf6482d9c8f49c0242053" },
                }}
              >
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
        <div>{/* <Popular /> */}</div>
        <div>
          <img
            src="https://i.pinimg.com/originals/7c/e0/b8/7ce0b8145c2a8150f4b971d18fc48d5c.jpg"
            alt="banner"
          />
        </div>
        <div>{/* <Popular /> */}</div>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
