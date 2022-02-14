import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    margin: 10,
    padding: 15,
    marginTop: 10,
    width: 200,
    border: " 1px solid lightgray",
  },
  media: {
    height: 200,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  typography: {
    fontFamily: "Almarai !important",

    fontSize: "1rem !important",
    fontWeight: "bold",
  },
  addIcon: {
    height: 38,
    width: 38,
  },
  cover: {
    height: 140,
  },
  content: {
    paddingBottom: "0!important",
  },
});

export default function ProductCard(props) {
  const classes = useStyles();
  // const [cartItem, setCartItem] = useState({picture:"", name:"", price:"", count: 1});
  //const {picture, name, price} = cartItem
  return (
    <Link to={`Product/${props.data._id}`}>
      <Card className={classes.root}>
        <CardActionArea>
          <div className={classes.details}>
            {props.data.picture && (
              <CardMedia
                className={classes.cover}
                image={props.data.picture.img}
                title={props.data.name}
                name="picture"
                //value={picture}
              />
            )}
            <CardContent className={classes.content}>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                className={classes.typography}
                name="name"
                //value={name}
              >
                {props.data.name}
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                className={classes.typography}
                name="price"
                //value={price}
              >
                {props.data.price}$
              </Typography>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </Link>
  );
}
