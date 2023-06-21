import React, { Children } from 'react' 
import { Navigate } from 'react-router-dom'
import { UseUserAuth } from '../contextApi/userAuth'
function HomeProtection({children}) {
  
  const {user} = UseUserAuth()
  if (!user){
     return <Navigate to="/"/>
  }
  return children
  
}

export default HomeProtection
