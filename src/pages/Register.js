import axios from 'axios';
import React, { useState, useContext } from 'react';
import UserContext from './UserContext';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useContext(UserContext);
    
    function registerUser(e){
        e.preventDefault();
        const data = {email, password}
        axios.post('http://localhost:4000/register', data, {withCredentials:true})
        .then(response =>{
          user.setEmail(response.data.email);
        });
    }
    
    

  return (
    <div>
      <form action='' onSubmit={e=>registerUser(e)}> 
        <h2>Register</h2>   
        <input type='email' 
        placeholder='enter your email'
        value={email}
        onChange={e=>{setEmail(e.target.value)}}/><br/>
        <input type='password'
        placeholder='enter password' 
        value={password}
        onChange={e=>{setPassword(e.target.value)}}/><br/>
        <button type='submit'>register</button>
      </form>
    </div>
  )
}
 
export default Register
