import React, {useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { getUserById } from '../../Store/actions/userAction'
function UserInfo(props) {
  const dispatch = useDispatch()

  const user = useSelector((state) => {return state.user})
  const userFirstName = user.user[props.data]

  useEffect(() => {
    console.log(props.data)
    const userId = props.data
    const payload ={
      params : {
        userId
      }
    }
    dispatch(getUserById(payload))
  }, [dispatch, props.data])

  
  userFirstName && console.log("user", userFirstName.firstName)

  return (
    <div>
      {userFirstName && userFirstName.firstName }
    </div>
  )
}

export default UserInfo
