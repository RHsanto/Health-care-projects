import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const {signInUsingGoogle,handleSignup,handleEmailChange,handlePasswordChange,error}=useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/';

  // const handleSignIn=()=>{
  //   handleSignup()
  //   .then(result=>{
  //     history.push(redirect_uri);
  //   })
  // }

  const handleGoogleLogin=()=>{
    signInUsingGoogle()
    .then(result=>{
   history.push( redirect_uri);
     })
     
  }
  
  return (
    <div className="container  mt-5">
      <p className='text-danger fw-bold'>{error}</p>
      <form onSubmit={handleSignup} >
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange}   type="email" className="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password </label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3"/>
    </div>
  </div>
  <button  type="submit" className="btn btn-primary">Sign in</button>
  <hr />


</form>

<button onClick={handleGoogleLogin}  className="btn btn-primary" > Google</button>
      </div>
  );
};

export default Login;