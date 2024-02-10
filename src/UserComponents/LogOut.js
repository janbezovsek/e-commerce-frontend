import React from 'react'
import Cookies from "universal-cookie";
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
    {/* logout */}
    <input type="submit" value="logout" className="btn" onClick={(e) => logout(e)}/>
    </>
    )
}

export default LogOut