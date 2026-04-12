import { createBrowserRouter } from 'react-router'
import Login from './feactures/auth/pages/Login'
import Register from './feactures/auth/pages/Register'
import Protected from './feactures/auth/components/Protected'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Protected>
            <h1>hello</h1>
        </Protected>
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