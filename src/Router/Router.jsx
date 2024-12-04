import {
   createBrowserRouter,
 } from "react-router-dom";

import Error from "../Components/Error/Error";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Login from './../Components/Login/Login';
import Register from "../Components/Register/Register";


const router = createBrowserRouter([
   {
      path: "/",
      element: <Root/>,
      errorElement: <Error />,
      children: [
         {
            path: "/",
            element: <Home />,
            loader: () => fetch(''),
            // children: [
            //    {
            //       path: "/",
            //       element: ,
            //       loader: () => fetch(''),
            //    },
            //    {
            //       path: "/category/:categoryName",
            //       element: ,
            //       loader: () => fetch(''),
            //    },
            // ]
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/register",
            element: <Register />,
         },
      ],
   },
 ]);


 
 export default router;