import React from 'react';
import './App.css';
import Login from './components/Login';

import { Link, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
        <Route path="/Login" component={Login}></Route>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
