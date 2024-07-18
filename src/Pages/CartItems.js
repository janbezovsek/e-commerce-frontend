import React,{ useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import  { NumericFormat } from 'react-number-format'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import './CartItems.css'


const CartItems = () => {

  
  //navigate hook to direct to checkout page
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkOutPage");
  }


  //Array for key values names
  //for delete function
  const NamesArray = []


  //Array for items
  const TotalArray = []


  //function for getting items from local storage
    Object.keys(localStorage).forEach((key) => {
        
        let name = key
        let variable = JSON.parse(localStorage.getItem(key));
        if((name !== "cartList") && (name !== "login")){
            TotalArray.unshift(variable)
            NamesArray.unshift(name)
            console.log(NamesArray)
        }
        
    })



    //init total price to 0
    //loop through all the items in the cart
    // return the total price
    const getTotalPrice = () => {
    
        let total = 0
        console.log(TotalArray.length)
        TotalArray.forEach(([item])=>{
        
        total += item.price
        
        console.log(total)
        
    })

    //save total price to session storage
    sessionStorage.setItem("price", JSON.stringify(total))

    return total
        
}


//function for deleting all items from the cart and local storage
const deleteAllItems = () => {
  
  Object.keys(localStorage).forEach((key) => {
        
    let name = key
    
    if((name !== "cartList") && (name !== "login")){
        
        localStorage.removeItem(name)
        
    }
})

window.location.reload(false);
}





/*
//function for deleting an item from the cart and local storage
const deleteItem = (item) => {
  console.log(item)
  const chosenItem = NamesArray.filter((value, index)=>{//NamesArray
    return  value !== item;
})
    console.log(chosenItem)
}

*/


//scroll to top of the page on first render
useEffect(() => {
  window.scrollTo(0, 0)
}, [])



  return (
    <>
    <div className="Cart">
    <div className="CartTotal-cartitems">
        <div className="choseItems-cartitems">
        <div className="product">  Product </div>
        <div className="price-item">  Price </div>
        <br/>
        <br/>
        {TotalArray.map((item, index) => {
          
                        return (
                        <div className="cart-items-items" key={index}>
                        {item && item.map((item, index) => (
                        <div key={index}>
                        <div className="price">EUR {item.price}</div>
                        <div className="x">
                          <FontAwesomeIcon icon={faX} /*onClick={() => {deleteItem(item)}} *//> Remove item from cart
                        </div>
                        <br/>
                        <div className="cart-item">
                        <img src={item.image} alt="" width="150" height="160"/> 
                        </div>
                        <div className="title">{item.title}</div>
                        <hr />
                        </div>
                        ))}
                        </div>
                    )}
                    )}
        </div>
        <h3>
            Subtotal ({TotalArray.length} items) : 
            <span className="Cart-Total-price">
                <NumericFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'EUR '} decimalScale={3}  />   
            </span>
        </h3>
        <div className="button">
        <button onClick={handleClick}>
        Proceed to CheckOutPage
        </button>     
        </div>
        <br/>
        <div className='clear'>
        <button variant="danger" onClick={() => deleteAllItems()}>
            Clear Cart items
        </button> 
        </div>
        <br/>
        <br/>
    </div>
    </div>
    </>
  )
}

export default CartItems