import React from "react"
import WorkoutList from "./WorkoutList"
import Container from '@material-ui/core/Container'


const Home = ({workouts, setWorkouts, activeWorkout, setActiveWorkout, newWorkout}) => {
    return(
        <Container style={{width:"100%", padding: "0", marginBottom: "120px", marginTop: "70px"}}>
            <WorkoutList key={workouts._id} workouts={workouts} setWorkouts={setWorkouts}/>
        </Container>
    );
}

export default Home;