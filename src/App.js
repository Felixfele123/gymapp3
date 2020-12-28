import React, { useState, useEffect }  from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import NewWorkout from './components/NewWorkout'
import axios from 'axios'

export default function ComplexGrid() {

  useEffect(() => {
    fetchWorkouts() 
}, [])
const [workouts, setWorkouts] = useState([]);
const [activeWorkout, setActiveWorkout] = useState(false);
const fetchWorkouts = async () => {
    const data = await axios({
        method: 'get',
        url: 'https://api-mygym.herokuapp.com/schema',
        withCredentials: true,
        params: {
          userID: "5fe79e833bd9731ea5f12cfc"
        },
      });
    const workouts = data.data
  console.log(workouts)
  setWorkouts(workouts[0].workouts)
  }
  return (
    <Router> 
      <div className="App">
        <Switch>
          <Route path="/" exact component={() => <Home activeWorkout={activeWorkout} setActiveWorkout={setActiveWorkout} workouts={workouts} setWorkouts={setWorkouts} />}/>
          <Route path="/NewWorkout" exact component={() => <NewWorkout  workouts={workouts} setWorkouts={setWorkouts}/>}/>
        </Switch>
      </div>
    </Router>
  );
}
