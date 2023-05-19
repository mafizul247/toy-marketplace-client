import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../components/Pages/Home/Home";
import Login from "../components/Pages/Login/Login";
import Register from "../components/Pages/Register/Register";
import AllToys from "../components/Pages/AllToys/AllToys";
import PrivateRouter from "./PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
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