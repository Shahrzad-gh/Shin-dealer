//import axios from 'axios';
import React, {useEffect, useState, createContext} from 'react'

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isLoggedIn, setisLoggedIn] = useState(undefined);
  
  async function getLoggedIn(){
    const loggedInRes = true;//await axios.get('/shipping');
    setisLoggedIn(loggedInRes);
  }
  
  useEffect(() => {
      getLoggedIn();
  }, []);

  return (
      <AuthContext.Provider value={ {isLoggedIn, getLoggedIn}}>
        {props.children}
      </AuthContext.Provider>
  )
}

export default AuthContext;
export { AuthContextProvider};
