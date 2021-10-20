import React from 'react';
import { useParams } from 'react-router';
import useServices from '../../../hooks/useServices';

const ServicesDetails = () => {
  const [services]=useServices();
  const {Id} = useParams();
  


 const matchedServices = services.find(service => service.id === Number(Id));
  return (
    <div className='container '>
      <div className="row  d-flex justify-content-center align-items-center my-5">
        <div className="col-lg-4">
        <div className="card">
  <img src={matchedServices?.img} className="card-img-top" alt="img"/>
  <div className="card-body">
    <h5 className="card-title fw-bold border-bottom p-2 w-50 mx-auto border-primary border-2">{matchedServices?.name}</h5>
    <p className="card-text">{matchedServices?.description.slice(0,200)}</p>
    <a href="/" className="btn btn-info">Book now</a>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;