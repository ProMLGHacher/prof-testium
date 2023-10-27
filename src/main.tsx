import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Welcome from './pages/welcome/Welcome'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Welcome />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
