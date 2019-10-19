import React from 'react';
import { Route } from "react-router";
import './App.css';

import { Signup } from './containers/signup/index';

function App() {
  return (
      <Route exact path='/' component={Signup}/>
  );
}

export default App;
