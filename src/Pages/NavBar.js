import React,{ useState } from 'react';
import {Link} from 'react-router-dom';
import { SearchBar } from '../UserComponents/SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping,  faUser } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-bootstrap/Modal';
import './NavBar.css';
import img1 from '../images/navbarImages/shopify.webp'








const Navbar=({ login })=>{

    const [clicked, setClicked] = useState(false)

    const [show, setShow] = useState(false); //state for managing modal when we click on search icon

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
                            Custom Modal Styling
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <div >
                            <input type="text" className="text"  placeholder="Search for items.."   />
                        </div>
                            <p>
                            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                            ipsam atque a dolores quisquam quisquam adipisci possimus
                            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                            deleniti rem!
                            </p>
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