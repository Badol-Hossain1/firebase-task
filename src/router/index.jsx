import { createBrowserRouter } from 'react-router'
import AuthLayout from '../layout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import About from '../components/private/about'
import Private from './private'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <div>thid is home </div>,
    },
    {
        path: '/about',
        element: (
            <Private>
                <About></About>
            </Private>
        ),
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
