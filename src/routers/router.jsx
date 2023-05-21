import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import AllToys from "../components/Pages/AllToys/AllToys";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddAToy from "../components/AddAToy/AddAToy";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'allToys',
                element: <PrivateRouter><AllToys/></PrivateRouter>
            },
            {
                path: '/addAToy',
                element: <AddAToy/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default router;