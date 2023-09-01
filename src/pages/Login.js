import axios from 'axios';
import React, { useState, useContext } from 'react';
import UserContext from './UserContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useContext(UserContext);
    const [loginError, setLoginError] = useState(false);
    
    function loginUser(e){
        e.preventDefault();
        const data = {email, password}
        axios.post('http://localhost:4000/login', data, {withCredentials:true})
        .then(response =>{
          user.setEmail(response.data.email);
          setEmail('');
          setPassword('');
        })
        .catch(()=>{
            setLoginError(true);
        });
    }
    
    

  return (
    <div>
      <form action='' onSubmit={e=>loginUser(e)}> 
        <h2>Login</h2>  
        {
            loginError && (
                <div>Wrong email or password entered! please check</div>
            )
        } 
        <input type='email' 
        placeholder='enter your email'
        value={email}
        onChange={e=>{setEmail(e.target.value)}}/><br/>
        <input type='password'
        placeholder='enter password' 
        value={password}
        onChange={e=>{setPassword(e.target.value)}}/><br/>
        <button type='submit'>login</button>
      </form>
    </div>
  )
}
 
export default Login;
