import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import Profile from "../pages/Profile/Profile";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Error from "../components/Error/Error";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/services',
                Component: Services,
            },
            {
                path: '/profile',
                element: <Profile></Profile>,
            },
            {
                path: '/service-details',
                Component: ServiceDetails,
            },
            {
                path: '/login',
                Component: Login,
            }, 
            {
                path: '/register',
                Component: Register,
            }
        ]
    },
    {
        path: '/*',
        Component: Error
    }
])

export default router