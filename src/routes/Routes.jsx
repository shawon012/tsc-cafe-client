import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import ChefRecipe from "../pages/ChefRecipe/ChefRecipe";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://the-tsc-cafe-server-shawon012.vercel.app/chefs`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/chefRecipe/:id',
                element: <ChefRecipe></ChefRecipe>,
                loader: ({params}) => fetch(`https://the-tsc-cafe-server-shawon012.vercel.app/chefRecipe/${params.id}`)
            }
        ]
    }
])

export default router;