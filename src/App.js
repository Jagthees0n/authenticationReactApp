import './App.css';
import { BrowserRouter, Routes ,Route, Link } from "react-router-dom";
import Register from './pages/Register';
import Login from './pages/Login.js';
import UserContext from './pages/UserContext';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const[email, setEmail] = useState('');
  
  useEffect(()=>{
    axios.get('http://localhost:4000/user', {withCredentials:true})
    .then(response =>{
      setEmail(response.data.email);
    });
  },[]);

  function logout(){
    axios.post('http://localhost:4000/logout', {}, {withCredentials:true})
    .then(()=> setEmail(''));
  }

  return (
    <div className="App">
      <UserContext.Provider value={{email,setEmail}}>
        <BrowserRouter>
            <div>
              {!!email && (
                <div>
                  Logged in as {email}
                  <button onClick={()=>logout()}>logout</button>
                </div>
              )}

              {!email && (
                <div>
                  Not Logged in 
                </div>
              )}
            </div>
            <div>
              <Link to={'/'}>Home</Link> |
              <Link to={'/login'}>Login</Link> |
              <Link to={'/register'}>Register</Link>
            </div>
            <Routes>
              <Route exact path={'/register'} Component={Register}/>
              <Route exact path={'/login'} Component={Login}/>
            </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
