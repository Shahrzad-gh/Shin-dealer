import React from "react";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 15,
  },
  typography: {
    fontFamily: "Almarai !important",
    fontSize: "1rem !important",
    fontWeight: "bolder",
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  content: {
    position: "absolute",
    top: 20,
    left: 10,
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
                    <CardContent className={classes.content}>
                      <Typography
                        className={classes.typography}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        زنـانـه
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={4}>
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
                    <CardContent className={classes.content}>
                      <Typography
                        className={classes.typography}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        مـردانـه
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={4}>
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
                    <CardContent className={classes.content}>
                      <Typography
                        className={classes.typography}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        بـچـه گـانـه
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
