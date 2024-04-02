import React,{useContext} from 'react'
import UserContext from '../CartComponents/userContext.js';
import './Items.css'

const Sofas = () => {

  //state for saving banner items that are displayed on Watch page
const { banners, setBanners }  = useContext(UserContext);

const {items, setItems} = useContext(UserContext);

//cart items
const newItems = [...items];//deconstructing

//banner items
const newBanners = [...banners];//deconstructing



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
            {item.sofas && item.sofas.map((item, index) => (
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
            <h1>Sofas</h1>
            <hr />
                <div className="CartItems-items">
                    {newItems.map((item, index) => {
                        return (
                        
                          
                        <div className="items" key={index}>
                        {item.sofas && item.sofas.map((item, index) => (
                        <div key={index}>
                        <div className="item">
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

export default Sofas