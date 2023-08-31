import React, { useState } from 'react'

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div>
      <form action=''>
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
