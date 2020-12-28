import React from "react";
import Workout from './Workout'
import Typography from '@material-ui/core/Typography';



const WorkoutList = ({workouts, setWorkouts}) => {

    return(
      <div>
      {workouts.map(workout => {
        return <div key={workout._id}>
          {workout.newWeek === true &&
            <Typography variant="h5" style={{color: "#3f51b5", margin: "10px", marginTop: "30px"}}>
              Vecka {Math.ceil((workouts.findIndex(w => w._id === workout._id) + 1)/2)}
            </Typography>
          }
        <Workout setWorkouts={setWorkouts} workouts={workouts} workout={workout} />
        </div>
      })}        
      </div>

    );
}

export default WorkoutList;
