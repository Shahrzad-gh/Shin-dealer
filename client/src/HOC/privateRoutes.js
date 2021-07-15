import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
//import { AuthContext } from '../context/AuthContext';
import AuthContext from '../context/AuthContext';

const PrivateRoutes = ({ component, roles, ...rest }) => {
  const { isLoggedIn, user } = useContext(AuthContext);

  return (
    <Route {...rest} render={props => {

      if (roles.includes(user.role)) {
        return <Redirect to={{ pathname: '/Admin', state:{ from: props.location} }} />
      }

      if(!isLoggedIn){
         return <Redirect  to={{ pathname: '/signin' }} />
        }
    }} />
  )
}

export default PrivateRoutes;