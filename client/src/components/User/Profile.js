import { CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React, {useEffect} from 'react';
import { Card} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { getUserById } from '../../Store/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';;

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
  },
  status:{
    display: 'flex',
    justifyContent: 'flex-end'
  }
})
function Profile(props) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const userId = "60d98604214b94312084c0b1"
  const user = useSelector(state => state.user)
  const userInfo = user.user[userId]
  useEffect(() => {
    const payload = {
      params : {
        userId
      }
    }
    dispatch(getUserById(payload))
  }, [])
  console.log(userInfo)
  return (
    <Box className={classes.root}>
      <Box display="flex" p={1} height="100%" width="30%">
      {"user profile"}
      </Box>
      <Box>
      <Box display="flex" p={1} flexGrow={1} height="40%">
      <div>
        <div className={classes.header}>{"userInfo"}</div>
        <div className={classes.status}>
         {userInfo && (
         <>
         <div>{userInfo.firstName}</div>
         <div>{userInfo.lastName}</div>
         </>
         )}
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
