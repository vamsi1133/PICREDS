import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login-launch/login/Login';
import Register from './login-launch/register/Register';
import Home from './home/Home'
import Wildcard from './wildcard'
import HttpsRedirect from 'react-https-redirect';


function App() {
  function Routes(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/register" component={Register} />
          <Route path="/*" component={Wildcard} />
        </Switch>
      </Router>
      );
  }

  return <HttpsRedirect><Routes/></HttpsRedirect>
    }
    
    export default App;
