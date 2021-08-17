import { CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { Card} from '@material-ui/core';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    padding: '20px',
    display: 'flex',
    height: '83vh'
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
    <Box className={classes.root}>
      <Box display="flex" p={1} height="100%" width="30%">
      {"user profile"}
      </Box>
      <Box>
      <Box display="flex" p={1} flexGrow={1} height="40%">
      {"userInfo"}
      <div>
        <div className={classes.header}></div>
        <div className={classes.status}>
          {"status.map(item => <div> {item} </div>"}
        </div>
      </div>
      </Box>
      <Box display="flex" p={1} flexGrow={1} height="58%">
      {"Order List"}
      </Box>
      </Box>
    </Box>
  )
}

export default Profile
