import React , { useContext } from 'react';
import { Route, Redirect } from 'react-router';
//import { AuthContext } from '../context/AuthContext';
import  AuthContext  from '../context/AuthContext';

const PrivateRoutes = ({component, roles, ...rest}) => {
  const {isLoggedIn, user} = useContext(AuthContext);
  console.log(isLoggedIn)
  return(
    <Route {...rest} render={props => {
      if(!isLoggedIn)
      return <Redirect  to={{ pathname: '/signin', state:{ from: props.location } }} />

      if(roles.includes(user.role))
      return <Redirect  to={{ pathname: '/admin', state:{ from: props.location } }} />

    }} />
  )
}

export default PrivateRoutes;