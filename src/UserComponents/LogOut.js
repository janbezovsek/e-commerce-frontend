import React from 'react'
import Cookies from "universal-cookie"
import './LogOut.css'
const cookies = new Cookies();






const LogOut = ({handleLogout }) => {

    // logout
    const logout = () => {
    // destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    handleLogout()//function for setting login to false
    // redirect user to the landing page
    window.location.href = "/";
}


return (
    <>
    <br/>
    <br/>
    <br/>
    Are you sure you want to log out
    <br/>
    {/* logout */}
    <input type="submit" value="Logout"  className="logoutBtn" onClick={(e) => logout(e)}/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </>
    )
}

export default LogOut