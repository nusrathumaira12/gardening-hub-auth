import React, { useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import Header from '../components/Header';

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  
    const createUser = (email, password) =>  {

return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {
      createUser,
      user,
      setUser,
    }

    return (
     <AuthContext.Provider value={userInfo}>
       
        {children}
     </AuthContext.Provider>
    );
};

export default AuthProvider;