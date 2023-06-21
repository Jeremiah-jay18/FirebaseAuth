import React, { useEffect, useState } from 'react'
import { auth } from '../firebase/firebaseConfig'
import { useContext, createContext } from 'react'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

const UserAuthContext = createContext()

export function UserAuth({ children }) {
  const [user, setUser] = useState('')
  
  function login(email,password) {
    return signInWithEmailAndPassword(auth,email, password)
      
    
  }
  function signUp(email,password){
 return createUserWithEmailAndPassword(auth, email, password)
  }
  function logout() {
    signOut(auth)
  }

  useEffect(() => {
    // const unsub = onAuthStateChanged(auth, (currentUser) => {
    //   setUser(currentUser)
    const unsub = onAuthStateChanged(auth, (updateCurrentUser) => {
       setUser(updateCurrentUser)
    })
    return () => {
      unsub()
    }
  },[])
  
  return (
    <UserAuthContext.Provider value={{
     user, signUp, login, logout
    }
    }>
      {children}
    </UserAuthContext.Provider>
  )
}


export function UseUserAuth(){
  return useContext(UserAuthContext)
}
