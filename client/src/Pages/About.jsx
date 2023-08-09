import React from 'react'
import './About.css'
import about_img from '../images/img/about.png'
import delivery_img from '../images/img/location.png'
const About = () => {
    return (
        <div className="about-section">
           
            <div className="about">
                <div className="about-text">
                    <h1>About Us</h1>
                    <p>Our food delivery app is revolutionizing the way you experience food. With a vast selection of mouthwatering dishes from local restaurants, we bring the culinary world to your fingertips. From the comfort of your own home, you can explore diverse cuisines, read reviews, and make informed choices that cater to your unique preferences. With our seamless ordering process and efficient delivery service, we ensure that your meals arrive fresh and on time, allowing you to indulge in the flavors you love without the hassle. Join us on this gastronomic adventure and discover a new level of convenience, variety, and culinary satisfaction.</p>
                </div>
                <div className="about-img">
                    <img src={about_img} alt="" />
                </div>
              <div className="about-delivery-img">
                <p>Free Delivery </p>
                <img src={delivery_img} width='200px' alt="" />
                <p>Fast Delivery</p>
              </div>
            </div>
           
        </div>
    )
}

export default About