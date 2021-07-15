import React,{ useState, useEffect } from 'react'
import axios from 'axios';

function ProductReview(props) {
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    try {
      axios.get('/getUserById',{
        params: {
        id: props.data.userId
      }}).then(res => setUserInfo(res)).catch(err => console.log(err));
    } catch (error) {
      console.log(error)
    }    
  },[props.data.userId]);
  
  return (
    <div>
      {userInfo && userInfo.data.user.firstName + ' ' + userInfo.data.user.lastName} : {props.data.review}
    </div>
  )
}

export default ProductReview
