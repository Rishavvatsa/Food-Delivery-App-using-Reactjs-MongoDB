import React from 'react'
import './About.css'
import about_img from '../images/img/about.png'
import delivery_img from '../images/img/location.png'
const About = () => {
    return (
        <div className="about-section">
           
           <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to <br /> The world of <br /> <span>BiteBazaar</span>
        </h1>
        <h4>
          "Say Namaste to Delicious Meals with <span>BiteBazaar</span>"
        </h4>
      </div>
      <div className="about-right">
        <img src={about_img} alt="Food Imag"/>
      </div>
    </div>
                
              <div className="about-delivery-img">
                <p>Free Delivery </p>
                <img src={delivery_img} width='200px' alt="" />
                <p>Fast Delivery</p>
              </div>
            </div>
           
        
    )
}

export default About