import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main";
import OurBlogs from "../Blogs/OurBlogs/OurBlogs";
import Home from "../Home/Home";
import Login from "../Authentication/Login/Login"
import Register from "../Authentication/Register/Register"
import Dashboard from "../Dashboard/DashBoard"
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AddBlogs from "../Dashboard/DashItems/AddBlogs";
import ViewBlogs from "../Dashboard/ViewBlogs";
import MangeUsers from "../Dashboard/MangeUsers";
import AdminRoute from "./PrivateRoute/AdminRoute";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                
            },
            {
                 path:'/blog' ,
                 element:<OurBlogs></OurBlogs>
            },
            {
                 path:'/login' ,
                 element:<Login></Login>
            },
            {
                 path:'/register' ,
                 element:<Register></Register>
            },
            {
                 path:'/dashboard' ,
                 element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
                 children:[
                  {
                    path:'add-blogs',
                    element: <AddBlogs></AddBlogs>
                  },
                  {
                    path:'view-blogs',
                    element:<ViewBlogs></ViewBlogs>
                  },
    
                  {
                    path:'manage-users',
                    element:<AdminRoute><MangeUsers></MangeUsers></AdminRoute>
                  }
                 ]
            },
       
            {
                path:'*',
                element: <h2>404</h2>
            }
        ]
    }
])
export default router;