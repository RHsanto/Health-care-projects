import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css'
const Pricing = () => {
  return (
    <div>
      {/* here start pricing section */}
   <div className="container">
     <div className="information mt-5">
       <p>Health care at the right cost</p>
       <h1>Select any of</h1>
       <h1 className='fw-bold text-primary border-bottom border-2 border-primary pb-2 w-50 mx-auto'>our pricing plans</h1>
     <p className='mt-3'>Credibly backend ideas for cross-platform models. <br /> Continually intermediated integratedprocesses through technically sound capital.</p>
     </div>
     <div className="row my-5 g-4">
       <div className="col-lg-4 col-sm-6">
       <div className="card  shadow-lg" >
 
  <div className="card-body p-5 bg-primary text-light">
    <small className='border-bottom border-3 border-light p-2'>BASIC</small>
    <h5 className="card-title fs-1 my-3">$ <span className='price'>199</span></h5>
    <p className="card-text">Regular medical treatments</p>
  </div>
  <ul className="list-group list-group-flush ">
    <li className="list-group-item py-3 d-flex justify-content-between">Routine checkup <span>25$</span></li>
    <li className="list-group-item py-3  d-flex justify-content-between">24h Assistance<span>120$</span></li>
    <li className="list-group-item py-3  d-flex justify-content-between">100 Tests & Treatments <span>80$</span></li>
    <li className="list-group-item py-3  d-flex justify-content-between">Regular Health Checkups <span>40$</span></li>
    
  </ul>
  
</div>
<Link to='/contact'> <button className='btn btn-primary mt-3'>Sign up <i className="fas fa-chevron-right"></i></button></Link>
       </div>
       <div className="col-lg-4 col-sm-6 ">
       <div className="card  shadow-lg">
 
  <div className="card-body p-5 bg-primary text-light">
    <small className='border-bottom border-3 border-light p-2'>CLASSIC</small>
    <h5 className="card-title fs-1 my-3">$ <span className='price'>250</span></h5>
    <p className="card-text">Treatments for a whole year
</p>
  </div>
  <ul className="list-group list-group-flush ">
    <li className="list-group-item py-3 d-flex justify-content-between">Routine checkup <span>25$</span></li>
    <li className="list-group-item py-3  d-flex justify-content-between">24h Assonance<span>120$</span></li>
    <li className="list-group-item py-3  d-flex justify-content-between">100 Tests & Treatments <span>80$</span></li>
    <li className="list-group-item py-3  d-flex justify-content-between">Regular Health Checkups <span>40$</span></li>
    
  </ul>
  
</div>
<Link to='/contact'> <button className='btn btn-primary mt-3'>Sign up <i className="fas fa-chevron-right"></i></button></Link>
       </div>
       <div className="col-lg-4 col-sm-6">
       <div className="card  shadow-lg">
 
  <div className="card-body bg-primary p-5 text-light">
    <small className='border-bottom border-3 border-light p-2'>ADVANCED</small>
    <h5 className="card-title fs-1 my-3">$ <span className='price'>750</span></h5>
    <p className="card-text">Full service for a whole year</p>
  </div>
  <ul className="list-group list-group-flush ">
    <li className="list-group-item py-3 d-flex justify-content-between">Routine checkup <span>25$</span></li>
    <li className="list-group-item py-3  d-flex justify-content-between">24h Assistance<span>120$</span></li>
    <li className="list-group-item py-3  d-flex justify-content-between">100 Tests & Treatments <span>80$</span></li>
    <li className="list-group-item py-3  d-flex justify-content-between">Regular Health Checkups <span>40$</span></li>
    
  </ul>
  
</div>
<Link to='/contact'> <button className='btn btn-primary mt-3'>Sign up <i className="fas fa-chevron-right"></i></button></Link>
       </div>
     </div>
   </div>
    </div>
  );
};

export default Pricing;