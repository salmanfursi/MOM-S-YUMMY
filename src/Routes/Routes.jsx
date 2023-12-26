import React from "react";
import {
   createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Error from "../Pages/Shared/error/Error";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";



export const router = createBrowserRouter([
   {
      path: "/",
      element: <Main />,
      errorElement:<Error></Error>,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/menu",
            element: <Menu />,
         },
         {
            path: "/order/:category",
            element: <Order />,
         },
         {
            path: "/login",
            element: <Login />,
         },
         {
            path: "/signup",
            element: <SignUp />,
         },
         {
            path: "/secret",
            element: <PrivateRoute><Secret /></PrivateRoute>
         }
      ]
   },
   {
      path: "dashboard",
      element: <PrivateRoute><Dashboard /></PrivateRoute>,
      children: [
         {
            path: "mycart",
            element: <MyCart />,
         },
         {
            path: "payment",
            element: <Payment />
         },
         {
            path: "allusers",
            element: <AllUsers />,
         },
         {
            path: "userhome",
            element: <UserHome />,
         },
         //admin route
         {
            path: "additam",
            element: <AdminRoute><AddItem /></AdminRoute>,
         },
         {
            path: "manageitems",
            element: <AdminRoute><ManageItem /></AdminRoute>,
         },
         {
            path: "adminhome",
            element: <AdminRoute><AdminHome /></AdminRoute>,
         },
      ] 
   }
]);


