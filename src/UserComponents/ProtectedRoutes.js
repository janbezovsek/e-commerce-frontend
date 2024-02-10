import React from "react";
import { Outlet, Navigate} from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

//use it as a template for routes you want to protect
const ProtectedRoutes = () => {

  // get cookie from browser if logged in
    const token = cookies.get("TOKEN");

  return (

    // returns route if there is a valid token set in the cookie
    // returns the user to the home page if there is no valid token set

    token ? <Outlet /> : <Navigate to="/" />
    
    );
}

export default ProtectedRoutes