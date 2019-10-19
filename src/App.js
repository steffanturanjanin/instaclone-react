import React from 'react';

import { Route, Switch, Redirect } from "react-router-dom";
import './App.css';

import { Signup } from './containers/signup/index';
import Login from './containers/login/index';

function App() {
  return (
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
      </Switch>
  );
}

export default App;
