import React, { useEffect, useState } from 'react';
import AuthContext from '../AuthContext/AuthContext';
import { AuthCredential, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.init';



const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()
    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = (email, password) => {
        setLoading(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userSignOut = () => {
        setLoading(false)
        return signOut(auth)
    }

    const userUpdateProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    const signInWithGoogle = () => {
        setLoading(false)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribed()
        }
    }, [])
    const userInfo = {
        signInWithGoogle,
        userUpdateProfile,
        userSignOut,
        createUser,
        userSignIn,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;