import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import axios from 'axios';

const auth = getAuth(app);
export const AuthContext =createContext(null)


const AuthProvider = ({children}) => {

  const [user ,setUser]=useState(null)
  const [loading ,setLoading]=useState(true)

  const googleProvider = new GoogleAuthProvider();

  const googleSignin =()=>{
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const createUser =(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const signIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const logOut=()=>{
    setLoading(true)
    return signOut(auth)
  }
  const updateUserProfile=(name,photo)=>{
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    }).then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
    
  }

  useEffect(()=>{
    const unsubscribe =onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      //get and set token      
      if(currentUser){
        axios.post('http://localhost:5000/jwt',{email :currentUser.email})
        .then(data => {
          // console.log('jwt token',data.data.token);
          localStorage.setItem('access-token',data.data.token);
          setLoading(false)

        })
        .catch(err => {
          console.log('response jwt token er',err);
        })
      }
      else{
        localStorage.removeItem('access-token')
      }
    })
    return ()=>{
      return unsubscribe()
    }
  },[])

  const authInfo={
     user,loading,createUser,signIn,logOut,updateUserProfile,googleSignin
  }

  return (
    <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;