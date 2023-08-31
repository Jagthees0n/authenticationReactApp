import './App.css';
import { BrowserRouter, Routes ,Route, Link } from "react-router-dom";
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <div>
            <Link to={'/'}>Home</Link> |
            <Link to={'/login'}>Login</Link> |
            <Link to={'/register'}>Register</Link>
          </div>
          <Routes>
            <Route exact path={'/register'} Component={Register}/>
          </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
