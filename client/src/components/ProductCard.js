import React , {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from '@material-ui/core/CardActions';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add"
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    display: "flex",
    maxWidth: 345,
    padding: 0,
    marginTop: 10,
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
  },
  addIcon: {
    height: 38,
    width: 38,
  },
  cover: {
    height: 140,
  },
});

export default function ProductCard(props) {
  const classes = useStyles();
  const [cartItem, setCartItem] = useState({picture:"", name:"", price:"", count: 1});
  const {picture, name, price, count} = cartItem

  const handleAddToBasket = async (e) => {
    e.preventDefault();
    console.log(e.target)
    setCartItem({ ...cartItem, [e.target.name]: e.target.value })
    console.log("cart", cartItem)

    const data = {
      // user,  
      cartItem
     };
    try{
     //await axios.post('/addtocart', data);  
    }catch(err){
      console.error(err)
    }
  }

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
{         props.data.picture && (<CardMedia
          className={classes.cover}
          image={props.data.picture.img}
          title={props.data.name}
          name="picture"
          value={picture}
        />)}
        <CardContent className={classes.content}>
          <Typography
            component="h5"
            variant="h5"
            className={classes.typography}>
            {props.data.description}
          </Typography>
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
          {props.data.price}
          </Typography>
        </CardContent>        
        <div className={classes.controls}>
          <CardActions>
            <Button onClick={handleAddToBasket} type="submit" variant="outlined" color="secondary" aria-label="add" title="اضافه به سبد خرید">
              <AddIcon
                className={classes.addIcon}                
              />
              <Typography className={classes.typography}>
              افزودن به سبد خرید
              </Typography>
            </Button>
          </CardActions>
        </div>
      </div>
    </Card>
  );
}
