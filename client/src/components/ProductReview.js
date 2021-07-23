import React,{ useEffect } from 'react'
import { getUserById } from '../Store/actions/userAction';
import {useDispatch , useSelector} from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: 10,
    padding: 15,
    marginTop: 10,
    width: 'max-content',
    border:' 1px solid lightgray',
    display: 'inline-block'
    },    
    typography: {
      fontFamily: "Almarai",
      fontSize: "1rem",
      fontWeight: 'normal'
    },
  });


function ProductReview(props) {
  const classes = useStyles();
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const userFirstName = user.user[props.userId]
  const {userId} = props;
  
  useEffect(() => {
    const payload = {
      params : {
        userId
      }
    }
    dispatch(getUserById(payload))  
  },[dispatch,userId]);
  
  return (
    <div>
      <Card className={classes.root}>
          <Typography className={classes.typography}>{userFirstName && userFirstName.firstName } : {props.review} </Typography>
      </Card>
    </div>
  )
}


export default ProductReview