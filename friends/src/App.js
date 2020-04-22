import React from 'react';


import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'; 
//components
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import AddFriend from './components/AddFriend';
import UpdateFriend from './components/UpdateFriend';

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
          <Link to ='/login'>Login</Link>
        </li>
        <li>
          <Link to='/friends'>Friends</Link>
        </li>
        <li>
          <Link to='/addfriend'>Add a New Friend</Link>
        </li>
      </ul>
      <Switch>
        <Route path ='/login' component ={Login}/>
        <PrivateRoute exact path ='/' component ={Friends}/>
        <PrivateRoute exact path ='/addfriend' component = {AddFriend}/>
        <PrivateRoute exact path ='/updatefriend' component ={UpdateFriend}/>
      </Switch>


    </div>
    </Router>
  );
}

export default App;
