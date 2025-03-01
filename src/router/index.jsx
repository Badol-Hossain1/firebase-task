import { createBrowserRouter } from 'react-router'
import AuthLayout from '../layout'
import Login from '../pages/Login'
import Register from '../pages/Register'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div>thid is home </div>,
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>,
            },
            {
                path: '/auth/register',
                element: <Register></Register>,
            },
        ],
    },
])
