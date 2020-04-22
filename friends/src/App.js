import React from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//components
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import AddFriend from "./components/AddFriend";
import UpdateFriend from "./components/UpdateFriend";
import Friends from "./components/Friends";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className ="links">
        <Link to="/login">Login</Link>
        <Link to="/friends">Friends</Link>
        <Link to="/addFriend">Add a New Friend</Link>
        <Link to="/updateFriend">Update Friend</Link>
        </div>
        <Switch>
          <PrivateRoute path="/addFriend" component={AddFriend} />
          <PrivateRoute path="/friends" component={Friends} />
          <PrivateRoute path="/updateFriend" component={UpdateFriend} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
