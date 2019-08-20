import React from 'react';
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

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
          <li>
            <Link to="/protected">Friends List</Link>
          </li>
        </ul>
        <Route path="/Login" component={Login}></Route>
        <PrivateRoute exact path="/protected" component={FriendsList}/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
