import React,{ useState } from 'react'
import '../UserComponents/Register.css'
import axios from "axios";

//potrebno je dodati funkcijo,ki preveri, če račun že obstaja 
//prav tako ob uspešni registraciji preusmeritev na neko določeno stran
const Register = () => {
    
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [register, setRegister] = useState(false);
    const [user, setUser] = useState(false)
    

    const handleSubmit = (e) => {
        // prevent the form from refreshing the whole page
        e.preventDefault();
        // set configurations
        const configuration = {
        method: "post",
        url: "http://localhost:5000/register",
        data: {
            email,
            password,
        },
    }

    // make the API call
    axios(configuration)
      .then((result) => {
        console.log(result)
        setRegister(true);
        
        
      })
      .catch((error) => {
        console.log(error)
        error = new Error();
        setUser(true)
      });
    }




  return (
    <>
     <div className="register">
        <h4>Register</h4>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text_input"
              placeholder="Password"

            />
          </div>
          
          <input
            type="submit"
            value="REGISTER"
            className="btn"
            onClick={(e) => handleSubmit(e)}

          />

        {/* display success message */}
        {register ? (
          <p className="text-success">You Are Registered Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Registered or email already exists</p>
        )}

        {user ? (
          <p className="text-success">user already exists</p>
        ) : (
          <p className="text-danger"></p>
        )


        }
        
        


        </form>
        
      </div>
    </>
  )
  
}

export default Register