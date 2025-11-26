import React, { Children } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const AuthProvider = ({children}) => {

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password)=> {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
        return signOut(auth);
    }



const authInfo = {

    createUser,
    signInUser,
    signInWithGoogle,
    signOutUser,

}
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;