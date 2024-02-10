import React from 'react'
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

export const SearchBar = () => {


return (

<>
    <div className="input-wrapper"> 
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" id="myInput"  placeholder="Search for items.."    />
    </div>
</>
)
}
