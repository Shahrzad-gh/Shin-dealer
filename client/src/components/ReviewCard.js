import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    margin: 10,
    padding: 15,
    marginTop: 10,
    border:' 1px solid lightgray',
    display: 'inline-block'
    },
    typography: {
      fontFamily: "Almarai",
      fontSize: "1rem",
      fontWeight: 'bold'
    },
  });
function ReviewCard(props) {
  
console.log(props)
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
          <Typography className={classes.typography}>
          {props.user && props.user.firstName + ' ' + props.user.lastName}
          </Typography>
          <Typography className={classes.typography}>
              {props.review}
          </Typography>
    </Card>
    </div>
  )
}

export default ReviewCard
