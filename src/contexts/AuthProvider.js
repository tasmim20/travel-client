import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
import axios from 'axios';

 export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
   
    const url ='http://localhost:5000';
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const providerLogin = (provider) =>{
        setLoading(true);
         return signInWithPopup(auth, provider)
     }
    const signIn = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUser = (userInfo) =>{
        return updateProfile(auth.currentUser, userInfo)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }

    const saveUser =(userInfo)=>{
        return axios.post(`${url}/users/create`, userInfo)
        
    }

    useEffect( ()=>{
       const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    },[])
    const authInfo = {createUser, signIn, updateUser,logOut,providerLogin,saveUser, user,url, loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;