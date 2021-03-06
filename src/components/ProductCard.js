import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

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

export default function ProductCard() {
  const classes = useStyles();
  const [product, addProduct] = useState(null);

  function handleAddToBasket() {
    //Add product to shopping basket
  }
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardMedia
          className={classes.cover}
          image="https://dkstatics-public.digikala.com/digikala-products/116827044.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80"
          title="تی شرت مردانه"
        />
        <CardContent className={classes.content}>
          <Typography
            component="h5"
            variant="h5"
            className={classes.typography}
          >
            تی شرت نخی مردانه فلوریزا طرح گروه موزیک لینکین پارک
          </Typography>
          <Typography
            variant="subtitle1"
            color="textSecondary"
            className={classes.typography}
          >
            Linnkin park 001M : کد تیشرت
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Button>
            <Button variant="outlined" color="secondary" aria-label="add" title="اضافه به سبد خرید">
              {/* <AddIcon
                className={classes.addIcon}
                onClick={handleAddToBasket}
              /> */}
              <Typography className={classes.typography}
>
              افزودن به سبد خرید
              </Typography>

            </Button>
          </Button>
        </div>
      </div>
    </Card>
  );
}
