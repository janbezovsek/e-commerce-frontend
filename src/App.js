import React,{useState} from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate} from 'react-router-dom'
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
import Footer from './Pages/Footer.js'
import dataProducts from './CartComponents/data.js';
import dataProductsList from './CartComponents/data2.js';
import bannersItems from './CartComponents/banners.js';
import  UserContext  from './CartComponents/userContext.js';
import ItemDescription from './Pages/ItemDescription.js';

function App() {
  
  
//state for saving cart items that are displayed on Home page
const [ items, setItems ] = useState(dataProducts)

//state for displaying titles in searchbar for items that we typed in
const [ items2, setItems2 ] = useState(dataProductsList)

//state for saving banner items that are displayed on Home page
const [ banners, setBanners ] = useState(bannersItems)
  
  
  //state for determening whether user is logged in or not
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


  //when item is clicked on Home p<ge it redirects us to Item description page where the
  //product is displayed
  const navigate = useNavigate()

  const navigateToShop = () => {
    //navigate to Item description page
    setTimeout(() => {
      navigate('/ItemDescription')
    }, 200);
  }



  return (
    <>
    <UserContext.Provider value={{items, setItems, banners, setBanners, navigateToShop, items2, setItems2}}>
    <div className="navbar">
    <Navbar login={login} navigate={navigate}/>
    </div>
    <div className="App">
    <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/cartItems" element={<CartItems navigate={navigate}/>} />
        <Route exact path="/checkOutPage" element={<CheckOutPage />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login handleLogin={handleLogin} login={login} />} />
        <Route exact path="/logout" element={<LogOut handleLogout={handleLogout} />} />
        <Route exact path="/ItemDescription" element={<ItemDescription />} />
        <Route exact path="*" element={<NoPage />} />
        <Route  element={   <ProtectedRoutes />  } >
          <Route exact path="/auth-endpoint"  element={<AuthComponent />}/>
        </Route> 
    </Routes>
    </div>
    <div className="footer">
      <Footer />
    </div>
    </UserContext.Provider>
    </>
  );
}

export default App;
