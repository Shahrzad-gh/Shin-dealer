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
  const [cartItem, setCartItem] = useState();

  const handleAddToBasket = async (e) => {
    // e.preventDefault();
    // try{
    //   const data = {
    //    // user,  
    //     cartItem
    //   };
    //  await axios.post('/addtocart', data);  
    // }catch(err){
    //   console.error(err)
    // }
  }

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
{         props.data.picture && (<CardMedia
          className={classes.cover}
          image={props.data.picture.img}
          title={props.data.name}
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
            className={classes.typography}>
          {props.data.name}
          </Typography>
        </CardContent>        
        <div className={classes.controls}>
          <CardActions>
            <Button variant="outlined" color="secondary" aria-label="add" title="اضافه به سبد خرید">
              <AddIcon
                className={classes.addIcon}
                onClick={handleAddToBasket}
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
