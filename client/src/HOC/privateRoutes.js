import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
//import { AuthContext } from '../context/AuthContext';
import AuthContext from '../context/AuthContext';

const PrivateRoutes = ({ component, roles, ...rest }) => {
  console.log("accept Role", roles)
  const { isLoggedIn, user } = useContext(AuthContext);
  console.log("Loggedin", isLoggedIn)
  console.log("user role", user.role)
  return (
    <Route {...rest} render={props => {

      if (roles.includes(user.role)) {
        console.log("route to admin")
        return <Redirect to={{ pathname: '/Admin', state:{ from: props.location} }} />
      }

      // if(!isLoggedIn)
      // {  console.log("route to sign in")
      //   return <Redirect  to={{ pathname: '/signin' }} />}

    }} />
  )
}

export default PrivateRoutes;