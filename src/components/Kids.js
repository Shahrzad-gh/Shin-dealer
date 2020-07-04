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
import Footer from "./Footer/Footer";

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
                    alt="kid"
                    height="200"
                    image="https://images.unsplash.com/photo-1530304027019-6bd0e056c223?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title="نوزاد"
                  />
                  <CardContent className={classes.paddingCard}>
                    <Typography
                      className={classes.typography}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      نوزاد
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
                    alt="boy"
                    height="200"
                    image="https://images.unsplash.com/photo-1590812787329-72cc6238be99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    title="پسرانه"
                  />
                  <CardContent className={classes.paddingCard}>
                    <Typography
                      className={classes.typography}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      پسرانه
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
                    alt="girl"
                    height="200"
                    image="https://images.unsplash.com/photo-1569858570155-5b3e7bf3e9dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                    title="دخترانه"
                  />
                  <CardContent className={classes.paddingCard}>
                    <Typography
                      className={classes.typography}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      دخترانه
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
            src="https://i.pinimg.com/originals/0b/39/14/0b3914ae30b768461468509a81e94d9c.jpg"
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
