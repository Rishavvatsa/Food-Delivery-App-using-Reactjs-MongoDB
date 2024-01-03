import React from 'react'
import logo from "../images/img/logo.png"
import { Link } from 'react-router-dom'
import "./footer.css"
import {FaInstagramSquare,FaFacebookSquare, FaLinkedin } from "react-icons/fa"
import {FaXTwitter,FaSquareThreads} from "react-icons/fa6"

import pay from "../images/img/pay.png"
const Footer = () => {
  return (
    <div className='footer mt-5'>
    <div className='footerin1'>
     <div className="f1">
        <img src={logo} alt=''/>
     </div>
      <div className='f2'>
        <h3>About Us</h3>
        <Link to='/about' className='stylenone'>
          <p>About us</p>
        </Link>
        <Link to='/contact' className='stylenone'>
          <p>Contact us</p>
        </Link>
        <p>About team</p>
        <p>Customer Support</p>
      </div>
      <div className='f2'>

        <h3>Our Information</h3>
        <Link to='/privacypolicy' className='stylenone'>
          <p>Privacy policy</p>
        </Link>
        <Link to='/termsandconditions' className='stylenone'>
          <p>Terms & conditions</p>
        </Link>
        <p>Return Policy</p>
        <p>Site Map</p>

      </div>
      <div className='f2'>
  <h3>Social Links</h3>
  <div className='social-link'>
    <FaInstagramSquare className='social-icon' />
    <p>Instagram</p>
  </div>
  <div className='social-link'>
    <FaXTwitter className='social-icon' />
    <p>Twitter</p>
  </div>
  <div className='social-link'>
    <FaFacebookSquare className='social-icon' />
    <p>Facebook</p>
  </div>
  <div className='social-link'>
    <FaLinkedin className='social-icon' />
    <p>Linked in</p>
  </div>
  <div className='social-link'>
    <FaSquareThreads className='social-icon' />
    <p>Threads</p>
  </div>
</div>
      <div className='f2'>
        <h3>Subscribe Now</h3>
        <p>Subscribe your email for newsletter and featured news based on your interest</p>
        <div className='inputcontainer'>
          <span className='icon1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
            </svg>

          </span>
          <input type='text' placeholder='Enter your email' />
          <span className='icon2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>

          </span>
        </div>
      </div>
    </div>
    <div className='footerin2'>
      <h3>©2023 Copyright Bitebazaar, Inc.  All rights reserved</h3>
      <img src={pay} alt='payimg' />
    </div>
  </div>
  )
}

export default Footer