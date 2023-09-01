import './App.css';
import { BrowserRouter, Routes ,Route, Link } from "react-router-dom";
import Register from './pages/Register';
import UserContext from './pages/UserContext';
import { useState } from 'react';

function App() {
  const[email, setEmail] = useState('');
  return (
    <div className="App">
      <UserContext.Provider value={{email,setEmail}}>
        <BrowserRouter>
            <div>
              {!!email && (
                <div>
                  Logged in as {email}
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
            </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
