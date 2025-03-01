import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import { AuthContext } from '../provider'

export default function AuthLayout() {
    const { user, logOut } = useContext(AuthContext)
    console.log("🚀 ~ AuthLayout ~ user:", user)
    return (
        <div>
            <nav>
                {user && user?.email ? (
                    <button onClick={() => logOut()}>logout</button>
                ) : (
                    <a href="/auth/login">login</a>
                )}
            </nav>
            <Outlet></Outlet>
        </div>
    )
}
