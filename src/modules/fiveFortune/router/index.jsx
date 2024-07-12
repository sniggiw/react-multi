import { createBrowserRouter } from 'react-router-dom'
import Index from '../views/Index'
import Info from '../views/Info'

const router = createBrowserRouter([
    {
        index: true,
        element: <Index />
    },
    {
        path: 'about',
        element: <Info />,
    }
])

export default router
