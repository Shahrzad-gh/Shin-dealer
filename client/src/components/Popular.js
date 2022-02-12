import React from "react";
import { makeStyles } from "@mui/styles";
import CardMedia from "@mui/material/CardMedia";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Link } from "react-router-dom";
// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 15,
  },
  typography: { fontFamily: "Almarai", fontSize: "1rem" },
  paper: {
    textAlign: "center",
    // color: theme.palette.text.secondary,
  },
  paddingCard: {
    padding: 3,
  },
}));
export default function Popular() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Carousel itemsToShow={6}>
          <Item>
            <Link to="/Best">
              <CardMedia
                component="img"
                image="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80"
                alt="female"
              />
            </Link>
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
    </React.Fragment>
  );
}
