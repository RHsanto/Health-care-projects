import React, { useEffect, useState } from 'react';
import Slider from './Slider/Slider';
import './Home.css'
import Team from './Team/Team';
import About from '../About/About';
import Footer from '../Footer/Footer';
const Home = () => {
  const [services,setServices] = useState([]);

  useEffect(()=>{
    fetch('./services.json')
    .then(res => res.json())
    .then(data => setServices(data.slice(0,3)))
  },[])
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <div className="container">
     <div className="row ms-5 gap-4">
       <h1>Our Services</h1>
     {services.map(service =>
    <div class="card text-start" style={{width: '24rem'}}>
    <img  src={service.img} class="card-img-top img" alt="..."/>
    <div class="card-body">
      <h5 class="card-title fw-bold">{service.name}</h5>
      <p class="card-text">{service.description.slice(0,150)}</p>
      <a href="/" class="btn btn-info">Read More </a>
    </div>
  </div>
    )}
     </div>
   </div>
   <Team></Team>
    </div>
  );
};

export default Home;