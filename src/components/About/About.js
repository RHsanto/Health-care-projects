import React from 'react';
import { Link } from 'react-router-dom';
import doctor from  '../../images/Doctor.png';
import './About.css'
const About = () => {
  return (
    <div className='m-5'>
     <div className="container">
       <div className="row mt-5 d-flex justify-content-center align-items-center">
         <div className="col-lg-4 col-sm-6 border-bottom border-3 border-info">
           <img className='w-100' src={doctor} alt="" />
           <h4 className='fw-bold my-4 '>Dr Alicia Harley</h4>
         </div>
         <div className="col-lg-8 col-sm-6 text-start">
           <h3 className='text-info fw-bold'>Who We Are</h3>
           <h1 className='fw-bold'>We are Achieve the <br /> Success of Treatment</h1>
           <p>Dr Alicia Harley Chambers is is dedicated to providing her patients with <br /> the best possible care. We at MediCare are focused on helping you.  After <br /> receiving successful care for various aches and pains over the years,  <br />Dr Chambers found her calling to help others get well.</p>
         <Link to='/contact'>
         <button id='contact-btn' className='border-0 px-5 py-3 bg-info text-light fw-bold'> Contact Us <i className="fas fa-chevron-right"></i></button>
         </Link>
         </div>
       </div>
     </div>
    </div>
  );
};

export default About;