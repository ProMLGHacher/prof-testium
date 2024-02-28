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
import UserMain from '../pages/main/UserMain'
import LessonsUser from '../pages/lessons/LessonsUser'
import Test from '../pages/Test/Test'
import TestConstructor from '../pages/addTest/AddTestTest'
import RatingUser from '../pages/rating/RatingMobile'
import ChangeUser from '../pages/changeUser/ChangeUser'
import ManagerMain from '../pages/main/ManagerMain'

const adminRouter = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
        errorElement: <Navigate to={'/'} />
    },
    {
        path: '/registration',
        element: <Navigate to={'/main'} />
    },
    {
        path: '/auth',
        element: <Navigate to={'/main'} />
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
                path: '/main/changeUser/:id',
                element: <ChangeUser />
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
                path: '/main/lessons/:id',
                element: <Test />
            },
            {
                path: '/main/mylessons',
                element: <LessonsUser />
            },
            {
                path: '/main/lessons/add',
                element: <AddLesson />
            },
            {
                path: '/main/lessons/addTest/:id',
                element: <TestConstructor />
            },
            {
                path: '/main/lessons',
                element: <LessonsUser />
            },
        ]
    }
])
const managerRouter = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
        errorElement: <Navigate to={'/'} />
    },
    {
        path: '/registration',
        element: <Navigate to={'/main'} />
    },
    {
        path: '/auth',
        element: <Navigate to={'/main'} />
    },
    {
        path: '/main',
        element: <ManagerMain />,
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
                path: '/main/changeUser/:id',
                element: <ChangeUser />
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
                path: '/main/lessons/:id',
                element: <Test />
            },
            {
                path: '/main/mylessons',
                element: <LessonsUser />
            },
            {
                path: '/main/lessons/add',
                element: <AddLesson />
            },
            {
                path: '/main/lessons/addTest/:id',
                element: <TestConstructor />
            },
            {
                path: '/main/lessons',
                element: <LessonsUser />
            },
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
const empRouter = createBrowserRouter([
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
        element: <Navigate to={'/main'} />
    },
    {
        path: '/auth',
        element: <Navigate to={'/main'} />
    },
    {
        path: '/main',
        element: <UserMain />,
        children: [
            {
                path: '/main/mobile',
                element: <Mobile />
            },
            {
                path: '/main/mylessons',
                element: <LessonsUser />
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
                element: <RatingUser />
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
                element: <LessonsUser />
            },
            {
                path: '/main/lessons/:id',
                element: <Test />
            },
            {
                path: '/main/lessons/add',
                element: <PageTitle text='Нет доступа' />
            },
            {
                path: '/main/lessons/addTest/:id',
                element: <PageTitle text='Нет доступа' />
            }
        ]
    }
])

const Router = () => {

    const token = useAppSelector(selectToken)
    const role = useAppSelector(selectRole)

    return (
        token ?
            role == UserRole.Admin ?
                <RouterProvider router={adminRouter} /> : role == UserRole.HrManager ?
                    <RouterProvider router={adminRouter} /> : role == UserRole.Manager ?
                        <RouterProvider router={managerRouter} /> : <RouterProvider router={empRouter} />
            : <RouterProvider router={nonAuthRouter} />
    )
}

export default Router