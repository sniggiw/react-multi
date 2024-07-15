import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import 'amfe-flexible';
import router from './router'
import "@assets/css/global.less"

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)

