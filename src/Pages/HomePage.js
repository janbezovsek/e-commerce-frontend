import React from 'react'
import SlideShow from '../Pages/SlideShow.js';
import Electronics from '../CartComponents/Electronics'
import Handbags from '../CartComponents/Handbags.js';
import Sofas from '../CartComponents/Sofas.js';
import Watches from '../CartComponents/Watches.js';
import './HomePage.css'




const HomePage = () => {



  
  return (
    <>
    <div className="carousel">
      <SlideShow />
    </div>
      
    <div>
      <Watches />
    </div>

    <div>
      <Electronics />
    </div>

    <div>
      <Handbags />
    </div>

    <div>
      <Sofas />
    </div>


  



    </>
  )
}

export default HomePage