import React from 'react';
import './App.css';
import Login from '../components/Login';

import { Link, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/Login">
        </li>
      </ul>

      <ul>
        <li>
          <Route path="/Login" component={Login}>
        </li>
      </ul>
      
    </div>
  );
}

export default App;
