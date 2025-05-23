import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUser = async (email, password, name, photoURL) => {
    setLoading(true);
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL || "/user.png",
      })
    

setUser({
   ...user, 
   displayName: name, 
   photoURL: photoURL || "/user.png" });

    return user;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  } finally {
    setLoading(false);
  }
};

const logout = async() => {
  setLoading(true);
  try {
  await signOut(auth)
   
      setUser(null);
  } catch (error) {
     

      console.error("Logout Error:", error.message);
    } finally {
     
      setLoading(false);
    }
  }

   


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser || null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

const userInfo = {
  createUser,
  user,
  setUser,
  logout,
  loading,
}

return (
  <AuthContext.Provider value={userInfo}>

    {children}
  </AuthContext.Provider>
);
};

export default AuthProvider;