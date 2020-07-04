import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 15,
  },
  typography: {
    fontFamily: "Almarai",
    fontSize: "1rem",
  },
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
              <Link to="Kids">
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="kid"
                      height="200"
                      image="https://image.freepik.com/free-photo/banner-with-surprised-children-peeking-edge_155003-10104.jpg"
                      title="بچه گانه"
                    />
                    <CardContent className={classes.paddingCard}>
                      <Typography
                        className={classes.typography}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        بچه گانه
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={4}>
              {/* /////////////// */}
              {/* //////////// */}
              <Link to="Men">
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="men"
                      height="200"
                      image="https://image.freepik.com/free-photo/portrait-young-handsome-man-jean-shirt-smiling-looking-camera_176420-12082.jpg"
                      title="مردانه"
                    />
                    <CardContent className={classes.paddingCard}>
                      <Typography
                        className={classes.typography}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        مردانه
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={4}>
              {/* //////////// */}
              <Link to="Women">
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt="girl"
                      height="200"
                      image="https://image.freepik.com/free-photo/beautiful-redhead-girl-with-freckles-smiling_176420-11278.jpg"
                      title="زنانه"
                    />
                    <CardContent className={classes.paddingCard}>
                      <Typography
                        className={classes.typography}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        زنانه
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}
