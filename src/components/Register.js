import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import '../App.css';
const Register = () => {
    let navigate = useNavigate();
    const [username, setUserName] = useState();
  const [password, setPassword] = useState();
 

  const handleSubmit = () =>{
    navigate('/jshopify');
    console.log(username, password);
  }


//   navigate('/jshopify')
  return (
    <div className="login-wrapper">
      <h4>Please Log In</h4>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div style={{'marginTop':'12px'}}>
          <button className='btn btn-primary' type="submit">Submit</button>
        </div>
      </form>
    </div> 
  )
}

export default Register        