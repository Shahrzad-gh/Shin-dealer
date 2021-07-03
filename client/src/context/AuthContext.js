//import axios from 'axios';
import React, {useEffect, useState, createContext} from 'react'
import axios from 'axios'

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [isLoggedIn, setisLoggedIn] = useState(undefined);
  const [user, setUser] = useState(null);

  async function getLoggedIn(){
    try{
      const loggedInRes = await axios.get('/auth');
      setisLoggedIn(loggedInRes.data);
  
      const roleRes = await axios.get('/role')
      setUser(roleRes.data)
    }
    catch(err){console.log(err)}

  }
  
  useEffect(() => {
      getLoggedIn();
  }, []);

  console.log("USER Role",user)
  console.log("LoggedIn",isLoggedIn)

  return (
      <AuthContext.Provider value={ {isLoggedIn, getLoggedIn, user}}>
        {props.children}
      </AuthContext.Provider>
  )
}

export default AuthContext;
export { AuthContextProvider};
