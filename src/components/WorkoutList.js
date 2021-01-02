import React from "react";
import Workout from './Workout'

const WorkoutList = ({workouts, setWorkouts}) => {
    return(
      <div style={{marginTop: "70px"}}>
        {workouts.map((workout, index) => {
          return <div key={index}>
            <Workout setWorkouts={setWorkouts} workouts={workouts} workout={workout}/>
          </div>
        })}        
      </div>
    );
}

export default WorkoutList;
