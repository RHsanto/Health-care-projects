import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css'
const Footer = () => {
  return (
    <footer>
      {/* start footer  section*/}
      <div className="container p-5">
      <div className="row">
        <div className="col-lg-4 text-start text-light">
          <h2 > <span className='fw-bold'> Trust </span>Care</h2>
          <p>Our Vision – We strive to be a leader of healthcare innovation that delivers the highest quality care while providing exceptional patient experiences in a modern and inviting environment.   </p>
          {/* here footer icon */}
          <div className="footer-icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-pinterest-p"></i>
          </div>
        </div>
        <div className="col-lg-4 ">
            {/* here footer nav bar */}
           <div className="footer-nav text-center mt-4">
              <ul>
               <NavLink to='/home'><li>Home</li></NavLink>
               <NavLink to='/services'><li>Services</li></NavLink>
               <NavLink to='/news'><li>Latest News</li></NavLink>
               <NavLink to='/pricing'><li>Pricing</li></NavLink>
               <NavLink to='/about'><li>About</li></NavLink>
               <NavLink to='/contact'><li>Contact</li></NavLink>
             </ul>
           </div>
          
        </div>
        {/* search bar here */}
        <div className="col-lg-4 text-light">
            <h4 className='text-light fw-bold mt-5 '>Search</h4>
            <input className='p-2 fs-6' type="text" placeholder='Search' />
            <button className='border-0 arrow bg-info'><i className="fas fa-arrow-right"></i></button>
         </div>
      </div>
   </div>
      <div className="copyright bg-secondary ">
         <p className='text-light '>Copyright © 2021 Trustcare.com</p>
          </div>
 </footer>
  );
};

export default Footer;