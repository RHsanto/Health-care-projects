import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      {/* here contact section */}
      <h1> <span className='fw-bold border-bottom border-2 border-primary'>Contact us</span> </h1>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
      <div className="col-lg-6 my-5">
      <div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingInput" placeholder="enter your name" required/>
  <label htmlFor="floatingInput">Your name</label>
</div>
      <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required/>
  <label htmlFor="floatingInput">Email </label>
</div>
<div className="form-floating mb-4">
  <input type="text" className="form-control" id="floatingText" placeholder="subject" required/>
  <label htmlFor="floatingText">Subject</label>
</div>
<div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" required></textarea>
  <label htmlFor="floatingTextarea">Send message</label>
</div>
<Link to='/'><button type="submit" className='my-4 btn btn-primary'>Submit</button></Link>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;