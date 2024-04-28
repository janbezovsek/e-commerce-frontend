import React,{ useState, useContext } from 'react'
import UserContext from '../CartComponents/userContext.js';
import './SearchBar.css'
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


export const SearchBar = () => {

    const [show, setShow] = useState(false); //state for managing modal when we click on search icon

    const [ query, setQuery ] = useState("") //for searchbar

    const [ list, setList ] = useState([]) //for searchbar

    const { navigateToShop }  = useContext(UserContext)//for displaying chosen item on ItemDescription page

    const {items2, setItems2} = useContext(UserContext);//cart items in data2 for displaying titles in searchbar, couldn't get the filter
    //method to work using items from data.js

    //cart items
    const newItems = [...items2];//deconstructing



     //handler function for searching items in searchbar

     const handleChange = (e) => {
      e.preventDefault();

      
      const results = newItems.filter((item) => {
        if (e.target.value === "") return null
        return item.title.toLowerCase().includes(e.target.value.toLowerCase())
      })


      setQuery(e.target.value)
      setList(results)
      
    };


return (

<>
    <div className="input-wrapper"> 
        <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => setShow(true)}/>
       { /*<input type="text" id="myInput"  placeholder="Search for items.."    />*/}
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
        <input type="text" className="text"  placeholder="Search for items.." onChange={handleChange} value={query}    />
        </div>
          
          <ul>
          {(query === '' ? "" : list.map(item => {
            return <li style={{cursor:'pointer'}} onClick={navigateToShop} key={item.id}>{item.title}</li>//when we chose an item in dropdown list it redirects us to that page where item is(in our case shop page)
          }))}
        </ul>

          
        </Modal.Body>
      </Modal>
    </div>

</>
)
}
