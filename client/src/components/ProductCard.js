import React , {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    margin: 10,
    padding: 15,
    marginTop: 10,
    width: 200,
    border:' 1px solid lightgray'
    },
  media: {
    height: 200,
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  typography: {
    fontFamily: "Almarai",
    fontSize: "1rem",
    fontWeight: 'bold'
  },
  addIcon: {
    height: 38,
    width: 38,
  },
  cover: {
    height: 140,
  },
  content: {
    paddingBottom: '0!important'
  }
});

export default function ProductCard(props) {
  const classes = useStyles();
  const [cartItem, setCartItem] = useState({picture:"", name:"", price:"", count: 1});
  const {picture, name, price, count} = cartItem
  return (
    <Link to={`Product/${props.data._id}`}>
    <Card className={classes.root}>
      <CardActionArea>
      <div className={classes.details}>
          {props.data.picture && (<CardMedia
          className={classes.cover}
          image={props.data.picture.img}
          title={props.data.name}
          name="picture"
          value={picture}
        />)}
        <CardContent className={classes.content}>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.typography}
            name="name"
            value={name}
            >
          {props.data.name}
          </Typography>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            className={classes.typography}
            name="price"
            value={price}
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
