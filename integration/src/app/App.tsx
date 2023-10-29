import './styles/index.css'
import MainPage from '../pages/main/MainPage'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Reg from '../pages/reg/Reg'
import { useAppDispatch, useAppSelector } from './hooks/redux-hooks'
import { logOut, selectRole, selectToken } from '../slices/auth/auth'
import Module from '../pages/module/Module'
import { UserRole } from '../entities/Module/Module'
import Org from '../pages/org/Org'
import AddModuleFile from '../pages/addModuleFile/AddModuleFile'
import Auth from '../pages/auth/Auth'
import { useEffect } from 'react'

const authRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <Navigate to={'/'} />
  },
  {
    path: '/module/:moduleName',
    element: <Module />
  }
])

const nonAuthRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/reg'} />
  },
  {
    path: '/reg',
    element: <Reg />
  },
  {
    path: '/auth',
    element: <Auth />
  }
])

const organizationRouter = createBrowserRouter([
  {
    path: '/',
    element: <Org />,
    errorElement: <Navigate to={'/'} />
  },
  {
    path: '/module/:moduleName',
    element: <AddModuleFile />
  },
])

function App() {

  const token = useAppSelector(selectToken)
  const role = useAppSelector(selectRole)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!role) {
      dispatch(logOut())
    }
  }, [role])

  return (
    <RouterProvider router={token ? role == UserRole.Common ? authRouter : organizationRouter : nonAuthRouter} />
  )
}

export default App
