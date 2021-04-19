import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    marginTop: 10,
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  typography: {
    fontFamily: "Almarai",
    fontSize: "1rem",
    fontWeight: "bold",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={(classes.title, classes.typography)}
          color="textSecondary"
          gutterBottom
        >
          سبد خرید
        </Typography>
        <Typography className={classes.typography} variant="h5" component="h2">
          سبد خرید شما
        </Typography>
        <Typography
          className={(classes.pos, classes.typography)}
          color="textSecondary"
        >
          خالی می باشد
        </Typography>
        <Typography
          className={classes.typography}
          variant="body2"
          component="p"
        >
          قابل پرداخت <br />
          {"صفر ریال"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.typography} size="small">
          پرداخت
        </Button>
      </CardActions>
    </Card>
  );
}
