import React,{ useEffect } from 'react'
import './ItemDescription.css'
import ItemContext from '../CartComponents/itemContext.js';

const ItemDescription = () => {

//
   // const { selectedItem }  = useContext(ItemContext);

    



    const selectedItem = JSON.parse(localStorage.getItem("cartList") || "[]")



    //cart items
//const newSelectedItem = {...selectedItem};//deconstructing
console.log(selectedItem)


//scroll to top of the page on first render
useEffect(() => {
    window.scrollTo(0, 0)
  }, [])




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
                    <>{item.stock}</>
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
        </div>
        
    </>
  )
}

export default ItemDescription