import React,{useState} from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom'
import Register from './UserComponents/Register.js';
import Login from './UserComponents/Login.js';
import LogOut from './UserComponents/LogOut.js';
import HomePage from './Pages/HomePage.js';
import CartItems from './Pages/CartItems.js';
import CheckOutPage from './Pages/CheckOutPage.js'; 
import NoPage from './Pages/NoPage.js';
import Navbar from './Pages/NavBar';
import AuthComponent from "./UserComponents/AuthComponent.js"
import ProtectedRoutes from './UserComponents/ProtectedRoutes.js';




export const Context = React.createContext()

function App() {
  

  const [login, setLogin] = useState(null);

  //function to set login to true
  const handleLogin = () => {
    setLogin(true)
  }

  //function to set login to false
  const handleLogout = () => {
    setLogin(false)
  }
  
  //setting key login in local storage to true
  if(login === true){
    localStorage.setItem('login', JSON.stringify(login))
  }

  //removing key login from local storage
  if(login === false){
    localStorage.removeItem("login");
  }

  



  return (
    <>

    
    <div className="navbar">
    <Navbar login={login}/>
    
    </div>


    <div className="App">
    
    
    
    <Routes>
    
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/cartItems" element={<CartItems />} />
        <Route exact path="/checkOutPage" element={<CheckOutPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login handleLogin={handleLogin} login={login} />} />
        <Route exact path="/logout" element={<LogOut handleLogout={handleLogout} />} />
        <Route exact path="*" element={<NoPage />} />
        <Route  element={   <ProtectedRoutes />  } >
          <Route exact path="/auth-endpoint"  element={<AuthComponent />}/>
        </Route> 
    </Routes>
    </div>
    
    </>
  );
}

export default App;
