import React from "react";
import Workout from './Workout'
import Typography from '@material-ui/core/Typography';



const WorkoutList = ({workouts, setWorkouts}) => {

    return(
      <div>
      {workouts.map(workout => {
        return <div>
          {workout.newWeek === true &&
            <Typography variant="h5" style={{color: "#3f51b5", margin: "10px", marginTop: "30px"}}>
              Vecka {Math.ceil(workout.workoutID/2)}
            </Typography>
          }
        <Workout setWorkouts={setWorkouts} workouts={workouts} key={workout.workoutID} workout={workout} />
        </div>
      })}        
      </div>

    );
}

export default WorkoutList;
