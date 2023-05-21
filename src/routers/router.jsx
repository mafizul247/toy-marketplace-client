import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AllToys from "../components/Pages/Toys/AllToys";
import AddAToy from "../components/Pages/Toys/AddAToy";
import DetailsToy from "../components/Pages/Toys/DetailsToy";

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
                element: <PrivateRouter><AllToys/></PrivateRouter>,
                loader: () => fetch('http://localhost:5000/toys')
            },
            {
                path: '/allToys/:id',
                element: <DetailsToy/>,
                loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: '/addAToy',
                element: <PrivateRouter><AddAToy/></PrivateRouter>
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