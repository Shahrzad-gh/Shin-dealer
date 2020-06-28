import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Footer from "./Footer";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
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

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
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
                    image="https://image.freepik.com/free-photo/banner-with-surprised-children-peeking-edge_155003-10104.jpg"
                    title="Contemplative Reptile"
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
            </Grid>
            <Grid item xs={4}>
              {/* /////////////// */}
              {/* //////////// */}
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="men"
                    height="200"
                    image="https://image.freepik.com/free-photo/portrait-young-handsome-man-jean-shirt-smiling-looking-camera_176420-12082.jpg"
                    title="Contemplative Reptile"
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
            </Grid>
            <Grid item xs={4}>
              {/* //////////// */}
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="girl"
                    height="200"
                    image="https://image.freepik.com/free-photo/beautiful-redhead-girl-with-freckles-smiling_176420-11278.jpg"
                    title="girl"
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
            </Grid>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="md">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="sale"
                    height="140"
                    image="https://t4.ftcdn.net/jpg/02/06/48/31/240_F_206483181_lzr9IaOPG2djCIl1VdZHwWjDKODyJYev.jpg"
                    title="girl"
                  />
                  <CardContent className={classes.paddingCard}>
                    <Typography
                      className={classes.typography}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      تخفیف
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="bestseller"
                    height="140"
                    image="https://t4.ftcdn.net/jpg/02/32/16/07/240_F_232160763_FuTBWDd981tvYEJFXpFZtolm8l4ct0Nz.jpg"
                    title="پرفروش"
                  />
                  <CardContent className={classes.paddingCard}>
                    <Typography
                      className={classes.typography}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      پرفروش
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </div>
      </Container>
      <div className={classes.root}>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <CardMedia
              component="img"
              image="https://image.freepik.com/free-photo/summer-street-style_72402-384.jpg"
              alt="female"
            />
          </Item>
          <Item>
            <CardMedia
              component="img"
              image="https://image.freepik.com/free-photo/striped-shirt-blue-shoes-near-yellow-red-cars_120485-3401.jpg"
              alt="female"
            />
          </Item>
          <Item>
            <CardMedia
              component="img"
              image="https://image.freepik.com/free-photo/pink-baby-onesie-with-sonography-picture-pacifier-marshmallow-brush-white-background_23-2147900719.jpg"
              alt="female"
            />
          </Item>
          <Item>
            <CardMedia
              component="img"
              image="https://image.freepik.com/free-photo/set-men-s-stylish-fashion-clothing-accessories_91924-508.jpg"
              alt="female"
            />
          </Item>
          <Item>
            <CardMedia
              component="img"
              image="https://image.freepik.com/free-photo/men-s-casual-outfit-men-s-fashion-clothing-accessories-white-woodentable-flat-lay_151851-692.jpg"
              alt="female"
            />
          </Item>
          <Item>
            <CardMedia
              component="img"
              image="https://image.freepik.com/free-photo/shoes_78361-3647.jpg"
              alt="female"
            />
          </Item>
          <Item>
            <CardMedia
              component="img"
              image="https://image.freepik.com/free-photo/flat-lay-woman-clothing-accessories-pastel-colors_72402-1145.jpg"
              alt="female"
            />
          </Item>
          <Item>
            <CardMedia
              component="img"
              image="https://image.freepik.com/free-photo/classic-men-casual-outfits-with-accessories-table_1357-162.jpg"
              alt="female"
            />
          </Item>
        </Carousel>
      </div>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Card>
              <CardHeader className={classes.typography}>
                <Typography className={classes.typography}>
                  بازگشت محصول
                </Typography>
              </CardHeader>
              <CardContent>
                <Typography className={classes.typography}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد .
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardHeader className={classes.typography}>
                <Typography className={classes.typography}>
                  ارسال رایگان
                </Typography>
              </CardHeader>
              <CardContent>
                <Typography className={classes.typography}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد .
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardHeader className={classes.typography}>
                <Typography className={classes.typography}>
                  پرداخت مطمئن
                </Typography>
              </CardHeader>
              <CardContent>
                <Typography className={classes.typography}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد .
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card>
              <CardHeader className={classes.typography}>
                <Typography className={classes.typography}>
                  پشتیبانی 24
                </Typography>
              </CardHeader>
              <CardContent>
                <Typography className={classes.typography}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد .
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </React.Fragment>
  );
}
