import React,{ useState, useContext, useEffect } from 'react'
import UserContext from '../CartComponents/userContext.js';
import './Items.css'

const Electronics = () => {

//state for saving banner items that are displayed on Electronics page
const { banners, setBanners }  = useContext(UserContext);

const {items, setItems} = useContext(UserContext);

const { navigateToShop }  = useContext(UserContext)//for displaying chosen item on ItemDescription page


//cart items
const newItems = [...items];//spread operator

//banner items
const newBanners = [...banners];//spread operator


//we are using this object to store information about the item that we currently clicked on
//and send this information to ItemDescription component

const [selectedItem, setSelectedItem] = useState(
  [{
        id: 0,
        title: "",
        stock: 0,
        quantity: 0,
        image: '',
        description: "",
        price: "",
        info: ""
}]);




const selectItem = (item) => {
  setSelectedItem([{id: item.id,
                  title : item.title,
                  stock: item.stock,
                  quantity: item.quantity,
                  image: item.image,
                  description: item.description,
                  price: item.price,
                  info: item.info
  }])
  console.log(selectedItem)
}


useEffect(() => {
  localStorage.setItem("cartList", JSON.stringify(selectedItem))
}, [selectedItem])



    return (
    <>
        <div className="CartItems">
        <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="banner-items">
        {newBanners.map((item, index) => {

          return (
          <div className="banners" key={index}>
            {item.electronics && item.electronics.map((item, index) => (
              <div key={index}>
              <div className="banner">
              <img src={item.image} alt="" />  
              </div>
              </div>
        ))}
          </div>
          )
        })}
        </div>
      <br />
      <br />
      <br />
      <br />
            <h1>Electronics</h1>
            <hr />
                <div className="CartItems-items">
                    {newItems.map((item, index) => {
                        return (
                        <div className="items" key={index}>
                        {item.electronics && item.electronics.map((item, index) => (
                        <div key={index}>
                        <div className="item" onClick={() => {selectItem(item);navigateToShop()}}>
                        <img src={item.image} alt="" width="230" height="240"/> 
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
        </div>
    </>
    )
}

export default Electronics