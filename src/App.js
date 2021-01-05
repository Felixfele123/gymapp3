import React, { useState, useEffect }  from "react";
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home'
import NewWorkout from './components/NewWorkout'
import axios from 'axios'
import TopBar from "./components/TopBar"
import BottomBar from "./components/BottomBar"
import ActiveWorkout from "./components/ActiveWorkout"
import { useCallback } from 'react'


export default function ComplexGrid() {
  const [workouts, setWorkouts] = useState([]);
  const [activeWorkout, setActiveWorkout] = useState(false);
  const [newWorkout, setNewWorkout] = useState({});
  const [newWorkoutList, setNewWorkoutList] = useState([]);
  const [AppStatus, setAppStatus] = useState(false);

  const putWorkouts = useCallback(async() => {
    setAppStatus(false)
      await axios({
        method: 'put',
        url: 'https://api-mygym.herokuapp.com/schema/5ff0601c4542a80429c9c2f4',
        withCredentials: true,
        data: {
          workouts: workouts
        }
      });
  }, [workouts])

  useEffect(() => {
    fetchWorkouts()
    fetchWorkoutsList()
  }, []);
  useEffect(() => {
    setAppStatus(true)
  }, [workouts]);


const fetchWorkouts = async () => {
    const data = await axios({
        method: 'get',
        url: 'https://api-mygym.herokuapp.com/schema',
        withCredentials: true,
      });
  const workouts = data.data
  setWorkouts(workouts[0].workouts)
  }

  const fetchWorkoutsList = async () => {
    const data = await axios({
        method: 'get',
        url: 'https://api-mygym.herokuapp.com/workout',
        withCredentials: true
      });
    const workouts = data.data
  setNewWorkoutList(workouts)
  }
  return (
    <Router> 
      <div className="App">
        <TopBar activeWorkout={activeWorkout} setActiveWorkout={setActiveWorkout} putWorkouts={putWorkouts} AppStatus={AppStatus}/>
          <Switch >
            <Route path="/" exact component={() => <Home activeWorkout={activeWorkout} setActiveWorkout={setActiveWorkout} workouts={workouts} setWorkouts={setWorkouts} newWorkout={newWorkout}/>}/>
            <Route path="/ActiveWorkout" exact component={() => <ActiveWorkout activeWorkout={activeWorkout} setActiveWorkout={setActiveWorkout} workouts={workouts} setWorkouts={setWorkouts} newWorkout={newWorkout} setNewWorkout={setNewWorkout}/>}/>
            <Route path="/NewWorkout" exact component={() => <NewWorkout style={{marginTop: "70px"}} workouts={workouts} setWorkouts={setWorkouts} newWorkout={newWorkout} setNewWorkout={setNewWorkout} newWorkoutList={newWorkoutList} setNewWorkoutList={setNewWorkoutList}/>}/>
          </Switch>
        <BottomBar newWorkoutList={newWorkoutList} activeWorkout={activeWorkout} setActiveWorkout={setActiveWorkout} setWorkouts={setWorkouts} workouts={workouts} newWorkout={newWorkout}/>
      </div>
    </Router>
  );
}