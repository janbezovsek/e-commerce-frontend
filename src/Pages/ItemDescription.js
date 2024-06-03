import React,{ useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import './ItemDescription.css'



const ItemDescription = () => {

    

//get the selected item from local storage(for displaying on the page)
const selectedItem = JSON.parse(localStorage.getItem("cartList") || "[]")

//state for counting how many times we have clicked (addToBag) on item
const [quantity, setQuantity] = useState(0)


//it counts number of chosen item that we clicked 
const itemQuantity = (e) => {


    setQuantity(quantity + 1)
    console.log(quantity)

}

//function for adding items that we choose to CartItems page
    const addToBag = (item) => {

        //specific id for every key value pair in local storage
        const now = new Date().getTime().toString();


        //we save the chosen item into local storage
        localStorage.setItem("addedItems"+ now, JSON.stringify(selectedItem))
        //console.log(localStorage.key(parseInt(now)));

    }

    



//scroll to top of the page on first render
useEffect(() => {
    window.scrollTo(0, 0)
}, [])





  //localStorage.removeItem("addedItems1717234757990");

    return (
    <>
    <br/> 
    <br/> 
        <div  className="all">
        {selectedItem.map((item,index) => {

        return (

        <div className="cartItems" key={index}>
            
            
            <div className="cart-image">
            <img src={item.image} alt="" width="330" height="340"/> 
            </div>
            <div className="cart-description">
                <div className="info-title">
                    <>{item.title}</>
                </div>
                <br />
                <div className="info-price">
                    <>EUR {item.price}</>
                </div>
                <br />
                <div className="info-description">
                    <>{item.info}</>
                </div>
            </div>
            <div className="cart-status">
                <div className="stockk">
                    <>{item.stock} ({item.quantity})</>
                </div>
                <button onClick={() => {addToBag();itemQuantity(item)}}>Add to bag</button>
                <div className="truck">
                <FontAwesomeIcon icon={faTruckFast} /> Free shipping
                </div>
            </div>
            </div>
            )})}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
        {selectedItem.map((item,index) => {

        return (
    
            <div className="cartItems" key={index}>


                <div className="about-item">
                    <>{item.description}</>
                </div>
            </div>

            )})}
            <br/>
            <br/>
        </div>
        
    </>
)
}

export default ItemDescription