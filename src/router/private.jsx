import React, { useContext } from 'react'
import { AuthContext } from '../provider'
import { Navigate } from 'react-router'

const Private = ({ children }) => {
    const { user } = useContext(AuthContext)
    console.log('🚀 ~ Private ~ user:', user)
    if (user) {
        return children
    }
    return user ? children : <Navigate to={'/auth/login'}></Navigate>
}

export default Private
