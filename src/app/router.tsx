import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Notifications from '../pages/Notifications/Notifications'
import AddLesson from '../pages/addLesson/AddLesson'
import AddTest from '../pages/addTest/AddTest'
import Auth from '../pages/auth/Auth'
import ChangePasswword from '../pages/change-password/ChangePasswword'
import Landing from '../pages/landing/Landing'
import Lessons from '../pages/lessons/Lessons'
import AdminMain from '../pages/main/AdminMain'
import Mobile from '../pages/mobile/Mobile'
import Profile from '../pages/propfile/Profile'
import Register from '../pages/register/Register'
import Welcome from '../pages/welcome/Welcome'
import { useAppSelector } from '../store/hooks'
import { selectRole, selectToken } from '../slices/authSlice'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
        errorElement:  <Navigate to={'/'} />
    },  
    {
        path: '/main',
        element: <AdminMain />,
        children: [
            {
                path: '/main/mobile',
                element: <Mobile />
            },
            {
                path: '/main/profile',
                element: <Profile />
            },
            {
                path: '/main/profile/changePassword',
                element: <ChangePasswword />
            },
            {
                path: '/main/profile/notifications',
                element: <Notifications />
            },
            {
                path: '/main/lessons',
                element: <Lessons />
            },
            {
                path: '/main/lessons/add',
                element: <AddLesson />
            },
            {
                path: '/main/lessons/addTest',
                element: <AddTest />
            }
        ]
    }
])

const nonAuthRouter = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
        errorElement: <Navigate to={'/'} />
    },
    {
        path: '/welcome',
        element: <Welcome />
    },
    {
        path: '/registration',
        element: <Register />
    },
    {
        path: '/auth',
        element: <Auth />
    }
])

const Router = () => {

    const token = useAppSelector(selectToken)
    const role = useAppSelector(selectRole)

    return (
        <RouterProvider router={ token ? router : nonAuthRouter} />
    )
}

export default Router