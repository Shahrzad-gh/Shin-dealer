import React from 'react'

function UserInfo(props) {
  console.log(props.data)
  return (
    <div>
      {props.data && props.data}
    </div>
  )
}

export default UserInfo
