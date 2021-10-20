import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Team = () => {
  const [teams,setTeams] = useState([]);

  useEffect(()=>{
    fetch('./services.json')
    .then(res => res.json())
    .then(data => setTeams(data.slice(6,10)))
  },[])
  return (
    <div>
      <div className="title">
      <h1 className='my-5'><span className='border-3 border-bottom border-info fw-bold'>Our Team</span> </h1>

      </div>
    <div className="container my-5">
      <div className="row g-4">
      {teams.map(team =>
   <div key={team.id} className="col-lg-3 col-sm-6">
      <div 
    className="card border-0 shadow-lg text-start" >
    <img  src={team.img} className="card-img-top " alt="..."/>
    <div className="card-body">
      <p className='border-2 border-info border-bottom w-50 '>{team.designation}</p>
      <h5 className="card-title fw-bold">{team.name}</h5>
      <p className="card-text">{team.description.slice(0,150)}</p>
      <Link to={`/service/${team.id}`}>
      <button  className="btn btn-info">Read More </button>
      </Link>
    </div>
  </div>
   </div>
    )}
        
      </div>
    </div>
    </div>
  );
};

export default Team;