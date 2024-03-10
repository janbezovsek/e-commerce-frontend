import React from 'react'
import './SlideShow.css'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../images/navbarImages/georgina1.avif'
import img2 from '../images/navbarImages/georgina4.webp'
import img3 from '../images/navbarImages/georgina6.webp'
import img6 from '../images/navbarImages/handbags3.jpg'
import img7 from '../images/navbarImages/washing machines.jpg'
import img8 from '../images/navbarImages/sofa1.jpg'




const SlideShow = () => {
    
    return (
      <>
      <div className="images">
      <Carousel>
      <Carousel.Item>
        <img src={img1} alt="" text="georgina1" 
        style={{
                width: "100%",
                aspectRatio: "10 / 6 ",
                margin: "0 auto"}}/>
                <Carousel.Caption>
          <h1>-30% discount</h1>
          <p>Guess handbags</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} alt="" text="georgina2" style={{
                width: "100%",
                aspectRatio: "10 / 6 ",
                margin: "0 auto"}} />
                <Carousel.Caption>
          <h1>-30% discount</h1>
          <p>Guess handbags</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} alt="" text="georgina3" 
        style={{
          width: "100%",
          aspectRatio: "10 / 6 ",
          margin: "0 auto"}} />
          <Carousel.Caption>
          <h1>-30% discount</h1>
          <p>Guess handbags</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img6} alt="" text="handbag" style={{
                width: "100%",
                aspectRatio: "10 / 6 ",
                margin: "0 auto"}} />
                <Carousel.Caption>
          <h1>-30% discount</h1>
          <p>Guess handbags</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img7} alt="" text="washing machine" style={{
                width: "100%",
                aspectRatio: "10 / 6 ",
                margin: "0 auto"}} />
                <Carousel.Caption>
          <h1>-25% discount for all Gorenje washing machines</h1>
          <p>Gorenje washing machine</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img8} alt="" text="sofa" style={{
                width: "100%",
                aspectRatio: "10 / 6 ",
                margin: "0 auto"}} />
                <Carousel.Caption>
          <h1>-40% everything must go</h1>
          <p>Trend store sofa</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
    )
}


export default SlideShow
