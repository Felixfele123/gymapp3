import React from "react"
import WorkoutList from "./WorkoutList"
import BottomBar from "./BottomBar"
import TopBar from "./TopBar"
import Container from '@material-ui/core/Container'


const Home = ({workouts, setWorkouts, activeWorkout, setActiveWorkout}) => {
    return(
        <Container style={{padding: "0", marginBottom: "120px"}}>
            <TopBar activeWorkout={activeWorkout} setActiveWorkout={setActiveWorkout}/>
            <WorkoutList key={workouts._id} workouts={workouts} setWorkouts={setWorkouts}/>
            <BottomBar activeWorkout={activeWorkout} setActiveWorkout={setActiveWorkout} setWorkouts={setWorkouts} workouts={workouts}/>
        </Container>
    );
}

export default Home;