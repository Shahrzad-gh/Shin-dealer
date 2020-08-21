import React, {useContext} from 'react'

const userContext = React.createContext({
    user: null,
})

export const useSession =() => {
    const {user} = useContext(userContext);
    return user
  }