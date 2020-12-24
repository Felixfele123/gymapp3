import React  from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'

export default function ComplexGrid() {
  return (
    <Router> 
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}
