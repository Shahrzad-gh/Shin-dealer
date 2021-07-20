import React,{ useState, useEffect } from 'react'
import { getUSerById } from '../Store/actions/userAction';
import {useDispatch , useSelector} from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Typography } from '@material-ui/core';
//import ReviewCard from './ReviewCard';
//import { createSelector } from 'reselect'
import { connect } from 'react-redux';
import axios from 'axios'
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

  //const selectUserName = createSelector(state => console.log(state))

function ProductReview(props) {

  console.log(props)
  const classes = useStyles();
  //const [userInfo, setUserInfo] = useState(null)
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const [userFirstName, setUserFirstName] = useState(user.firstName)
console.log(userFirstName)
  const {userId} = props;
  

  // useEffect(() => {
  //   setUserFirstName(user.firstName);
  // }, [user.firstName]);

  // useEffect(() => {
  //   const payload = {
  //     params : {
  //       userId
  //     }
  //   }
  //   dispatch(getUSerById(payload))  
  // },[]);
  
  
  // useEffect(() => {
  //   const id = props.userId
  //   try {
  //     axios.get(`/getUserById/${id}`).then(res => setUserInfo(res)).catch(err => console.log(err));
  //   } catch (error) {
  //     console.log(error)
  //   }    
  // }, []);

  //console.log("userInfo",userInfo)

  return (
    <div>
      <Card className={classes.root}>
        {/* <Typography className={classes.typography}>
        {userFirstName && userFirstName } : {props.review}
          </Typography> */}
      {/* <ReviewCard user={user && user.user} review={props.review} />  */}
      {props.data && props.data.map((item, index) => 
        <div key={index}>
          {item.userId} : {item.review}
        </div>
      )}
      </Card>
    </div>
  )
}


export default ProductReview