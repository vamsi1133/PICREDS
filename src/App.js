import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Launch from './login-launch/launch/Launch';
import Login from './login-launch/login/Login'
import Register from './login-launch/register/Register'


function App() {
  return (
    <Router>
        <Route exact path = "/" component = {Launch} />
        <Route exact path = "/login" component = {Login} />           
        <Route exact path = "/register" component = {Register} />           
    </Router>
  );
}

export default App;
