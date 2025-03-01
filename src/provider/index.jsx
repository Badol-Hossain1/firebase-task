import { createContext, useEffect, useState } from 'react'
import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true); // Ensure it loads before redirecting

    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // existing user login

    const UserLogin = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }
    const logOut = () => {
        signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        CreateUser,
        UserLogin,
        logOut,
        setLoading,
        loading,
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    if (loading) {
        return <p>Loading...</p>; // Prevent redirect before loading finishes
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider
