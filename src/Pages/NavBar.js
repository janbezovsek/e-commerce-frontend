import React,{ useState } from 'react';
import {Link} from 'react-router-dom';
import { SearchBar } from '../UserComponents/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,  faUser } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css';







const Navbar=({ login })=>{

    const [clicked, setClicked] = useState(false)

    const items = JSON.parse(localStorage.getItem('login'));//get login state for toggling between login and logout in navbar

    const handleClick = () => {
        setClicked(!clicked)
    }




    return (   
        <>
        <nav>
                
                    <div className="navBar">
                        <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"} >
                        <li>
                        <Link to="/">Home Page</Link>
                        </li>
                        <li>
                        <Link to="/cartItems">Cart Items</Link>
                        </li>
                        <li>
                        <Link to="/checkOutPage">Check Out</Link>
                        </li>
                        <li>
                        <Link to="/register">Register</Link>
                        </li>
                        {items ? (
                        <li>
                        <Link to="/logout">Logout</Link>
                        </li>
                        )
                        : (
                            <li>
                        <Link to="/login">Login</Link>
                        </li>
                        )}
                        <li>
                        <SearchBar />
                        </li>
                        <li className='cart'> 
                        <FontAwesomeIcon icon={faCartShopping} color="#919db1" />
                        </li>
                        <li className='cart'>
                        <FontAwesomeIcon icon={faUser} color="#919db1"/>
                        </li>
                        {items ? (
                        <li>
                            <div style={{color : '#919db1' }}>
                            Signed In 
                            </div>
                        </li>)
                        :  (
                        <li>
                            <div style={{color : '#919db1' }}>
                            Hello, sign in
                            </div>
                        </li> 
                        )}
                        
                        </ul>
                        
                    </div>

                    {/*handlebars showing when using phone */}
                    <div id="mobile" onClick={handleClick}>
                        <i className={clicked ?
                        "fas fa-times" :
                        "fas fa-bars"}>
                        </i>
                    </div>

                    
                
        </nav>
            
        </> 
    )

}

export default Navbar;