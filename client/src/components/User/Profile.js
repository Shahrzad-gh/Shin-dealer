import { CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Card} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '20px',
    display: 'flex'
  },
  card: {
    border: '1px solid blue'
  },
  typography : {
    fontFamily: "Almarai", fontSize: "1rem",
    padding: 12,
    margin: 0
  }
})
function Profile() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardMedia>
          <img src="" alt="" title=""/>
        </CardMedia>
        <CardContent>
          <Typography className={classes.typography}>
            <p>userName</p>
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        
      </Card>
    </div>
  )
}

export default Profile
