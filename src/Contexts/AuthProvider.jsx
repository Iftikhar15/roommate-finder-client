import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth';
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from 'firebase/auth/cordova';



const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser]= useState(null);
    const CreateUser = async (email, password, photoURL, displayName) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        await updateProfile(user, {
            displayName: displayName,
            photoURL: photoURL
        });
        return userCredential;
    };

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser= ()=>{
        return signOut(auth)
    }

    const googleSingin =()=>{
        
        return signInWithPopup (auth, googleProvider)
    }

    // onAuthStateChanged (auth, (currentUser) => {
    //     if (currentUser) {
    //         console.log('has logged in', currentUser);
    //     }
    //     else {
    //         console.log('current user', currentUser);
    //     }
    // })



    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, (currentUser)=>{
            console.log('inside useeffect on auth state change', currentUser);
            setUser(currentUser);
            
        })
        return () =>{
            unSubscribe();
        }
    },[])


    const userInfo = {
        user,
        CreateUser,
        signInUser,
        signOutUser,
        googleSingin,
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );    
};

export default AuthProvider;