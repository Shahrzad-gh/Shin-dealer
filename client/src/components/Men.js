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
              {/* //////////// */}
              <Link
                to={{
                  pathname: "MenCloths",
                  state: { cat_id: "60db1f8455a62c4efc177e9d" },
                }}
              >
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="clothes"
                      height="200"
                      image="https://ae01.alicdn.com/kf/Hb9551ec4db134f878694a415ad64abc3i/Free-Ship-T-Shirts-Men-Women-100-Cotton-Summer-Short-Solid-Male-Female-Basic-Tshirts-Plain.jpg"
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
            <Grid item xs={4}>
              {/* /////////////// */}
              {/* //////////// */}
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="shoe"
                    height="200"
                    image="https://veganmenshoes.com/wp-content/uploads/2019/06/vegan-dress-shoes-for-men-best-mens-cruelty-free-vegetarian-leather-fake-faux-formal-casual-brown-black-sustainable-eco-friendly-synthetic-manmade-top-2019.jpg"
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
            
          </Grid>
        </div>
        <div>
          <Popular />
        </div>
        <div>
          <img
            src="https://i.pinimg.com/originals/69/6d/64/696d64ddc9a95153feec89eae2be5606.jpg"
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
