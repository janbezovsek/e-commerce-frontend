import React,{  useState } from 'react'
import axios from "axios";
import Cookies from "universal-cookie";
import '../UserComponents/Login.css'
//ob uspešnem loginu preusmeritev na np. homepage

const cookies = new Cookies();



const Login = ({ handleLogin, login }) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  


  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:5000/login",
      data: {
        email,
        password,
      },
    }

    // make the API call
    axios(configuration)
      .then((result) => {
        console.log(result)
        handleLogin()//envoking function for setting login to true
        console.log(login)
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // redirect user to the home page
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error)
        error = new Error();
      });

  }



  return (
    <>
     <div className="login">
        <h4>Login</h4>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text_input"
              placeholder="email"

            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              valuea={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text_input"
              placeholder="Password"

            />
          </div>
          <input
            type="submit"
            value="LOGIN"
            className="btn"
            onClick={(e) => handleSubmit(e)}
          />

          {/* display success message */}
        {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}


        </form>
        <a className="link" href="/signup">Sign Up</a>
      </div>
    </>
  )
  
}

export default Login