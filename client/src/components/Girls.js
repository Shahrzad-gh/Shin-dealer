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
export default function Girls() {
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
                  pathname: "GirlsCloths",
                  state: { cat_id: "625ab1e749b8631f84631741" },
                }}
              >
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="clothes"
                      height="200"
                      image="https://img.freepik.com/free-photo/girl-hoodie-skateboard_53876-97843.jpg?t=st=1650114014~exp=1650114614~hmac=774ebeffe7d1e2974cdba59d0557f874ed215560921d718e4ca6ba1745dad6f7&w=360"
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
                    image="https://img.freepik.com/free-photo/baby-shoes-isolated-white-background_93675-130285.jpg?t=st=1650114134~exp=1650114734~hmac=07a9160ce30bc8b9c9c2dfb2ce564de137d2b22258c175a049438a41673a8cc1&w=740"
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
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="accesory"
                    height="200"
                    image="https://img.freepik.com/free-photo/knitted-children-s-clothing-light-background-with-accessories_169016-3186.jpg?t=st=1650114220~exp=1650114820~hmac=0dfa8561c4c0173634163f4a0c9df16f2c05d8c50e15b053e7609cd509a0f4cb&w=740"
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
