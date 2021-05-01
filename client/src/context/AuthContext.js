//import axios from 'axios';
import React, {useEffect, useState, createContext} from 'react'

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isLoggedIn, setisLoggedIn] = useState(undefined);
  
  async function getLoggedIn(){
    const loggedInRes = await axios.get('/shipping');
    console.log(loggedInRes)
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
