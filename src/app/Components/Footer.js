import React from 'react'
import { FaFacebook } from "react-icons/fa";  
import { ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import Foot from '@/app/Styles/Footer.module.css'
const Footer = () => {
  return (
    <>
    <footer className={Foot.fott}>
    <div className="container">
   <i><FaFacebook /></i>
   <i><ImTwitter /></i>
  <i><FaInstagram /></i>
  <i><FaLinkedinIn /></i>
  <i><AiOutlineYoutube /></i>

      <div className={Foot.fot}>
        <ul>
            <li>Company</li>
            <li>Home</li>
            <li>Contact Us</li>
            <li>About us</li>
            <li>Get started</li>
        </ul>
        <ul>
            <li>Services</li>
            <li>graphic design</li>
            <li>Web design</li>
            <li>Logo design</li>
            <li>Banner design</li>
        </ul>
        <ul>
            <li>Account</li>
            <li>Profile</li>
            <li>My account</li>
            <li>prefrences</li>
            <li>Purchase</li>
        </ul>
        <ul>
            <li>Courses</li>
            <li>HTML & CSS</li>
            <li>Javascript</li>
            <li>Photography</li>
            <li>Photoshop</li>
        </ul>
        <ul>
            <li>Subscribe</li>
            <input type="email" value=" " height="20px" width="20px" placeholder="Enter your email"></input>
        </ul>
      </div>
      </div>
      </footer>
    </>
  )
}
export default Footer