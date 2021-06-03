import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true)

  const signup = (email, password) => {
      return auth.createUserWithEmailAndPassword(email, password)
  }

  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        setCurrentUser(user)
        setLoading(false)
        
    })
    return unsubscribe
  }, [])
  

  const value = {
    currentUser,
    signup,
    signin,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  };
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
}
