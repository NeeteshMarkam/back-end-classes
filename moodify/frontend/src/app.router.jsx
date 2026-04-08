import { createBrowserRouter } from 'react-router'
import Login from './feactures/auth/pages/Login'
import Register from './feactures/auth/pages/Register'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>home</h1>
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])