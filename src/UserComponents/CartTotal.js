import React,{ useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import  { NumericFormat } from 'react-number-format';



const CartTotal = () => {


    //navigate hook to direct to cart items page
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/cartItems");
    };


    //Array for saving items from local storage
    const TotalArray = []

    Object.keys(localStorage).forEach((key) => {
        
        let name = key
        let variable = JSON.parse(localStorage.getItem(key));
        if(name !== "cartList" && name !== "login"){
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
    <div className="App">
    <div className="CartTotal">
        <div className="choseItems">
        {TotalArray.map((item, index) => {
                        return (
                        <div className="items" key={index}>
                        {item && item.map((item, index) => (
                        <div key={index}>
                        <div className="item" >
                        <img src={item.image} alt="" width="50" height="50"/> 
                        </div>
                        <h3>{item.title}</h3>
                        <h3>EUR {item.price}</h3>
                        <div className='stock'>{item.quantity} {item.stock}</div>
                        <hr />
                        </div>
                        ))}
                        </div>
                    )}
                    )}
        </div>
        <h3>
            Subtotal ({TotalArray.length} items) :
            <span className="CartTotal-price">
                <NumericFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'EUR '} decimalScale={3}  />   
            </span>
        </h3>
        <button onClick={handleClick} style={{"backgroundColor":"#0a0a23",
    "color": "#fff",
    "border":"none",
    "borderRadius":"10px",
    "minHeight":"30px",
    "minWidth": "120px",
    "padding":"15px"}}>
        Proceed to Cart Items
        </button>     
    </div>
    </div>
    </>
)
}

export default CartTotal