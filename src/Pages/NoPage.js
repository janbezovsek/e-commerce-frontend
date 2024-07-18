import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NoPage.css'

const NoPage = () => {

  //navigate hook to direct to home page
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }


  return (
    <>
    <br/>
    <br/>
    <br/>
    <div className="col-md-12 text-center">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
            Sorry, the page you are looking
            for does not exist.
        </p>
        <button className='direct' onClick={handleClick}>
        Proceed to Home Page
        </button>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    </>
  )
}

export default NoPage