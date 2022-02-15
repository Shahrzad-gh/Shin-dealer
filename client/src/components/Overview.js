import { Grid } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 200,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cover: {
    display: "block",
    overflow: "hidden",
    position: "relative",
    // -webkitTr: "transform 0.9s ease",
    // -o-transition: "transform 0.9s ease",
    // -moz-transition: "transform 0.9s ease",
  },
  media: {
    width: "100%",
    "&:hover": {
      transform: "scale(1.3)",
      transition: "transform 0.9s ease",
    },
    "&:hover + a": {
      bottom: "50px",
      animation: "2s ease infinite",

      // transform: "translateY(-50%)",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  styledCard: {
    padding: 50,
  },
  typography: { fontFamily: "Almarai !important", fontSize: "1rem !important" },
  quickview: {
    width: "10vw",
    padding: 10,
    backgroundColor: "#fff",
    color: "#000",
    position: "absolute",
    bottom: "-50px",
    left: "50%",
    borderRadius: 20,
    transform: "translateX(-50%)",
    "& hover": {
      backgroundColor: "#000",
      color: "#fff",
    },
  },
}));

function Overview() {
  const classes = useStyles();

  const allProduct = [
    {
      title: "پیراهن بلند",
      price: "10.00",
      img: "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-caucasian-young-woman-model_158538-2774.jpg?w=360",
    },
    {
      title: "شلوار کتان",
      price: "99.00",
      img: "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-caucasian-young-woman-model_158538-2774.jpg?w=360",
    },
    {
      title: "شومیز یقه گرد",
      price: "100",
      img: "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-caucasian-young-woman-model_158538-2774.jpg?w=360",
    },
    {
      title: "کفش اسپورت",
      price: "4000",
      img: "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-caucasian-young-woman-model_158538-2774.jpg?w=360",
    },
    {
      title: "دستبند مردانه",
      price: "999.0",
      img: "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-caucasian-young-woman-model_158538-2774.jpg?w=360",
    },
    {
      title: "کمربند چرمی",
      price: "12.0",
      img: "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-caucasian-young-woman-model_158538-2774.jpg?w=360",
    },
    {
      title: "گوشواره استیل",
      price: "25.000",
      img: "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-caucasian-young-woman-model_158538-2774.jpg?w=360",
    },
    {
      title: "کراوات نخی",
      price: "6.0",
      img: "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-caucasian-young-woman-model_158538-2774.jpg?w=360",
    },
    {
      title: "dfrgds",
      price: "70.0",
      img: "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-caucasian-young-woman-model_158538-2774.jpg?w=360",
    },
    {
      title: "دکمه سرآستین استیل",
      price: "120.0",
      img: "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-caucasian-young-woman-model_158538-2774.jpg?w=360",
    },
    {
      title: "پیراهن کوتاه",
      price: "1200.0",
      img: "https://img.freepik.com/free-photo/high-fashion-look-glamor-closeup-portrait-beautiful-sexy-stylish-caucasian-young-woman-model_158538-2774.jpg?w=360",
    },
  ];

  return (
    <div className="overview">
      <h1>Overview</h1>
      <Grid container>
        {allProduct.map((product, i) => (
          <Grid
            item
            xs={6}
            md={3}
            key={i}
            className={(classes.styledCard, classes.typography)}
          >
            <Card className={classes.root}>
              {product.img && (
                <div className={classes.cover}>
                  <img
                    className={classes.media}
                    src={product.img}
                    title={product.title}
                    name="picture"
                    //value={picture}
                  />
                  <a className={classes.quickview}>نمایش</a>
                </div>
              )}
              <CardContent className={classes.content}>
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  className={classes.typography}
                  name="name"
                  //value={name}
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  className={classes.typography}
                  name="price"
                  //value={price}
                >
                  {product.price}$
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Overview;
