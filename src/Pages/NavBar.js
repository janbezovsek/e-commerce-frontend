import React,{ useState } from 'react';
import {Link} from 'react-router-dom';
import { SearchBar } from '../UserComponents/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,  faUser } from '@fortawesome/free-solid-svg-icons'
import CartTotal from '../UserComponents/CartTotal'
import Modal from 'react-bootstrap/Modal';
import './NavBar.css';
import img1 from '../images/navbarImages/shopify.webp'



const Navbar=({ login , navigate})=>{

    const [clicked, setClicked] = useState(false)

    const [show, setShow] = useState(false); //state for managing modal when we click on search icon

    const items = JSON.parse(localStorage.getItem('login'));//get login state for toggling between login and logout in navbar

    const handleClick = () => {
        setClicked(!clicked)
    }



    //logic for displaying total amount of items in navbar
    const TotalArray = []

    Object.keys(localStorage).forEach((key) => {
        
        let name = key
        let variable = JSON.parse(localStorage.getItem(key));
        if((name !== "cartList") && (name !== "login")){
            TotalArray.unshift(variable);
            
        }
    })

    

    return (   
        <>
        <nav>
                    <div className="navBar">
                        <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"} >
                        <li>
                        <div className="logo">
                        <img src={img1} alt="" />
                        </div>
                        </li>
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
                        <div className="cart-count">{TotalArray.length}</div>
                        <li className='cart'> 
                        <FontAwesomeIcon icon={faCartShopping} color="#919db1" onClick={() => setShow(true)} />
                        <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                        >
                        <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Shopping bag
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        
                            <div>
                            <CartTotal navigate={navigate}/>
                            </div>
                        </Modal.Body>
                        </Modal>
                        </li>
                        <li className='cart'>
                        <FontAwesomeIcon icon={faUser} color="#919db1" />
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