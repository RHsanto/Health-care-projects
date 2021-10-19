import React from 'react';
import doctor1 from '../../../images/dr.1.jpeg';
import doctor2 from '../../../images/dr.2.jpeg'
import doctor3 from '../../../images/dr.3.jpg'
import doctor4 from '../../../images/dr-5.jpg'
const Team = () => {
  return (
    <div>
      <div className="title ">
      <h1 className='my-5'>Our <span className='text-primary fw-bold'> Team</span></h1>

      </div>
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6">
            <div class="card">
              <img src={doctor1} class="card-img-top" alt="..."/>
                 <div class="card-body text-start">
                   <p className='border-bottom border-2 border-info w-50'>Chief surgeon</p>
                  <h5 class="card-title">Bernice Ray</h5>
                  <p class="card-text">Podcasting operational change management inside of workflows to establish a framework.</p>
                  <a href="/" class="btn btn-info ">Read more</a>
               </div>
           </div>
       </div>
        <div className="col-lg-3 col-sm-6">
            <div class="card">
              <img src={doctor2} class="card-img-top" alt="..."/>
                 <div class="card-body text-start">
                   <p className='border-bottom border-2 border-info w-50'>Neurosurgery</p>
                  <h5 class="card-title">Jason Boltom</h5>
                  <p class="card-text">Keeping your eye on the ball while performing a deep dive on the start-up mentality.</p>
                  <a href="/" class="btn btn-info">Read more</a>
               </div>
           </div>
       </div>
        <div className="col-lg-3 col-sm-6">
            <div class="card">
              <img src={doctor3} class="card-img-top" alt="..."/>
                 <div class="card-body text-start">
                   <p className='border-bottom border-2 border-info w-50'>Otolaryngology</p>
                  <h5 class="card-title">Marteen Denman</h5>
                  <p class="card-text">Taking seamless key performance indicators offline to maximise the long tail.</p>
                  <a href="/" class="btn btn-info">Read more</a>
               </div>
           </div>
       </div>
        <div className="col-lg-3 col-sm-6">
            <div class="card">
              <img src={doctor4} class="card-img-top" alt="..."/>
                 <div class="card-body text-start">
                   <p className='border-bottom border-2 border-info w-50'>Dental surgeon</p>
                  <h5 class="card-title">George Button</h5>
                  <p class="card-text">Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                  <a href="/" class="btn btn-info">Read more</a>
               </div>
           </div>
       </div>
        
      </div>
    </div>
    </div>
  );
};

export default Team;