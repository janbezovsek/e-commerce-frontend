import React,{ useEffect } from 'react'
import  { NumericFormat } from 'react-number-format'
import './CartItems.css'

const CartItems = () => {



  const TotalArray = []

    Object.keys(localStorage).forEach((key) => {
        
        let name = key
        let variable = JSON.parse(localStorage.getItem(key));
        if(name !== "cartList"){
            TotalArray.unshift(variable);
            

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
                        <div className="cart-item" /*onClick={() => {selectItem(item);navigateToShop()}}*/>
                        
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
            Subtotal({TotalArray.length} items) :
            <span className="Cart-Total-price">
                <NumericFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'EUR'} decimalScale={3}  />   
            </span>
        </h3>
        <button>
        Proceed to Cart Items
        </button>     
    </div>
    </div>
    </>
  )
}

export default CartItems