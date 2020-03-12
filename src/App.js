import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Launch from './login-launch/launch/Launch';
import Login from './login-launch/login/Login';
import Register from './login-launch/register/Register';
import Home from './home/Home'
import Wildcard from './wildcard'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Launch} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route path="/*" component={Wildcard} />
      </Switch>
    </Router>
  );
}

export default App;
