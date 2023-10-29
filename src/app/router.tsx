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
import { UserRole, selectRole, selectToken } from '../slices/authSlice'
import Rating from '../pages/rating/Rating'
import Emp from '../emp/Emp'
import AddEmp from '../emp/AddEmp'
import Ot from '../ot/Ot'
import DetRating from '../pages/rating/DetRating'
import PageTitle from '../shared/ui/PageTitle/PageTitle'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
        errorElement: <Navigate to={'/'} />
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
                path: '/main/emp',
                element: <Emp />
            },
            {
                path: '/main/emp/add/:id',
                element: <AddEmp />
            },
            {
                path: '/main/departments',
                element: <Ot />
            },
            {
                path: '/main/profile/changePassword',
                element: <ChangePasswword />
            },
            {
                path: '/main/rating',
                element: <Rating />
            },
            {
                path: '/main/rating/:id',
                element: <DetRating />
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
                path: '/main/lessons/addTest/:id',
                element: <AddTest />
            }
        ]
    }
])
const manRouter = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
        errorElement: <Navigate to={'/'} />
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
                path: '/main/emp',
                element: <Emp />
            },
            {
                path: '/main/emp/add/:id',
                element: <PageTitle text='Нет доступа' />
            },
            {
                path: '/main/departments',
                element: <Ot />
            },
            {
                path: '/main/profile/changePassword',
                element: <ChangePasswword />
            },
            {
                path: '/main/rating',
                element: <Rating />
            },
            {
                path: '/main/rating/:id',
                element: <DetRating />
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
                element: <PageTitle text='Нет доступа' />
            },
            {
                path: '/main/lessons/addTest/:id',
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
const authRouter = createBrowserRouter([
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
    },
    {
        path: '/main',
        element:  <PageTitle text='Нет доступа' />
    }
])

const Router = () => {

    const token = useAppSelector(selectToken)
    const role = useAppSelector(selectRole)

    return (
        <RouterProvider router={token ?
            role == UserRole.Admin ?
                router : role == UserRole.HrManager ?
                    router : role == UserRole.Manager ?
                    manRouter : authRouter
            : nonAuthRouter} />
    )
}

export default Router