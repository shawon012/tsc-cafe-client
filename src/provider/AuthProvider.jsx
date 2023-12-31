import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providor = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password, photoURL, displayName) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, { displayName: displayName, photoURL: photoURL })
                .then(() => {
                    // Profile data updated successfully
                })
                .catch((error) => {
                    console.log(error.message);
                });
        })
        .catch((error) => {
        console.log(error.message);
    });
    }
const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
const signInGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
}
const signInGithub = () => {
    setLoading(true)
    return signInWithPopup(auth, providor)
}

const logOut = () => {
    setLoading(true)
    return signOut(auth)
}
useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, loggedUser => {
        console.log('logged in user inside auth state observer', loggedUser)
        setUser(loggedUser);
        setLoading(false);
    })
    return () => {
        unSubscribe()
    }
}, [])
const authInfo = {
    user,
    loading,
    signIn,
    createUser,
    logOut,
    signInGoogle,
    signInGithub
}
return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
);
};

export default AuthProvider;