import {
   createBrowserRouter,
 } from "react-router-dom";

import Error from "../Components/Error/Error";
import Root from "../Components/Root/Root";
import Home from "../Components/Home/Home";
import Login from './../Components/Login/Login';
import Register from "../Components/Register/Register";
import AddEquipment from "../Components/AddEquipment/AddEquipment";
import PrivateRouter from "./PrivateRouter";
import AllSportsEquipment from "../Components/AllSportsEquipment/AllSportsEquipment";
import EquipmentDetails from "../Components/EquipmentDetails/EquipmentDetails";
import MyEquipmentList from "../Components/MyEquipmentList/MyEquipmentList";
import UpdateEquipment from "../Components/UpdateEquipment/UpdateEquipment";


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
         {
            path: "/all-sports-equipment",
            element: <AllSportsEquipment/>,
          },
         {
            path: "/add-equipment",
            element: <PrivateRouter><AddEquipment/></PrivateRouter>,
          },
         {
            path: "/equipment/:id",
            element: <PrivateRouter><EquipmentDetails/></PrivateRouter>,
          },
         {
            path: "/my-equipment-list",
            element: <PrivateRouter><MyEquipmentList/></PrivateRouter>,
          },
         {
            path: "/update/:id",
            element: <PrivateRouter><UpdateEquipment/></PrivateRouter>,
          },
      ],
   },
 ]);


 
 export default router;