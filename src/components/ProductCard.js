import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import AddIcon from "@material-ui/icons/Add";
import { Container } from "@material-ui/core";

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
          <IconButton aria-label="add" title="اضافه به سبد خرید">
            <AddIcon className={classes.addIcon} />
          </IconButton>
        </div>
      </div>

      {/* <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://dkstatics-public.digikala.com/digikala-products/116827044.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_80"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid> */}
    </Card>
  );
}
