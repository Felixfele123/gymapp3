import React, { useState } from "react"
import WorkoutList from "./WorkoutList"
import BottomBar from "./BottomBar"
import Container from '@material-ui/core/Container'

const Home = () => {
    const [counterActive, setCounterActive] = useState(true)
    const [workouts, setWorkouts] = useState([
        {
          workoutID: 1,
          name: "Upper body",
          newWeek: true,
          expanded: false,
          inProgress: false,
          excirceses: [
            { 
              excerciseID: 1,
              name: "Rodd",
              type: "Stamina",
              sets: [
                {setID: 10, duration: "20 Minutes", resistence: "6 Växel", status:"open"},
              ],
              resistence: "",
              time: null,
            },
            {
              excerciseID: 2,
              name: "Benchpress",
              type: "Srenght",
              sets: [
                {setID: 1, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 2, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 3, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 4, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 5, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 6, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
              ],
              resistence: "75kg",
              time: null,
            }
          ]
        },
        {
          workoutID: 2,
          name: "Full body",
          newWeek: false,
          expanded: false,
          inProgress: false,
          excirceses: [
            { 
              excerciseID: 1,
              name: "Rodd",
              type: "Stamina",
              sets: [
                {setID: 10, duration: "20 Minutes", resistence: "6 Växel", status:"open"},
              ],
              resistence: "",
              time: null,
            },
            {
              excerciseID: 2,
              name: "Deadlift",
              type: "Strenght",
              sets: [
                {setID: 1, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 2, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 3, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 4, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 5, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 6, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
              ],
              resistence: "110kg",
              time: null,
            }
          ]
        },
        {
          workoutID: 3,
          name: "Lower body",
          newWeek: true,
          expanded: false,
          inProgress: false,
          excirceses: [
            { 
              excerciseID: 1,
              name: "Cykel",
              type: "Stamina",
              sets: [
                {setID: 10, duration: "20 Minutes", resistence: "6 Växel", status:"open"},
              ],
              kilograms: null,
              time: null,
            },
            {
              excerciseID: 2,
              name: "Ben böj",
              type: "Strenght",
              sets: [
                {setID: 1, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 2, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 3, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 4, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 5, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 6, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
              ],
              resistence: "80kg",
              time: null,
            }
          ]
        },
        {
          workoutID: 4,
          name: "Upper body",
          newWeek: false,
          expanded: false,
          inProgress: false,
          excirceses: [
            { 
              excerciseID: 1,
              name: "Rodd",
              type: "Stamina",
              sets: [
                {setID: 10, duration: "20 Minutes", resistence: "6 Växel", status:"open"},
              ],
              resistence: "",
              time: null,
            },
            {
              excerciseID: 2,
              name: "Deadlift",
              type: "Strenght",
              sets: [
                {setID: 1, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 2, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 3, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 4, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 5, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 6, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
              ],
              resistence: "110kg",
              time: null,
            }
          ]
        },
        {
          workoutID: 5,
          name: "Upper body",
          newWeek: true,
          expanded: false,
          inProgress: false,
          excirceses: [
            { 
              excerciseID: 1,
              name: "Rodd",
              type: "Stamina",
              sets: [
                {setID: 10, duration: "20 Minutes", resistence: "6 Växel", status:"open"},
              ],
              resistence: "",
              time: null,
            },
            {
              excerciseID: 2,
              name: "Benchpress",
              type: "Srenght",
              sets: [
                {setID: 1, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 2, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 3, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 4, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 5, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 6, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
              ],
              resistence: "75kg",
              time: null,
            }
          ]
        },
        {
          workoutID: 6,
          name: "Full body",
          newWeek: false,
          expanded: false,
          inProgress: false,
          excirceses: [
            { 
              excerciseID: 1,
              name: "Rodd",
              type: "Stamina",
              sets: [
                {setID: 10, duration: "20 Minutes", resistence: "6 Växel", status:"open"},
              ],
              resistence: "",
              time: null,
            },
            {
              excerciseID: 2,
              name: "Deadlift",
              type: "Strenght",
              sets: [
                {setID: 1, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 2, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 3, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 4, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 5, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 6, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
              ],
              resistence: "110kg",
              time: null,
            }
          ]
        },
        {
          workoutID: 7,
          name: "Lower body",
          newWeek: true,
          expanded: false,
          inProgress: false,
          excirceses: [
            { 
              excerciseID: 1,
              name: "Cykel",
              type: "Stamina",
              sets: [
                {setID: 10, duration: "20 Minutes", resistence: "6 Växel", status:"open"},
              ],
              kilograms: null,
              time: null,
            },
            {
              excerciseID: 2,
              name: "Ben böj",
              type: "Strenght",
              sets: [
                {setID: 1, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 2, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 3, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 4, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 5, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 6, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
              ],
              resistence: "80kg",
              time: null,
            }
          ]
        },
        {
          workoutID: 8,
          newWeek: false,
          expanded: false,
          name: "Upper body",
          inProgress: false,
          excirceses: [
            { 
              excerciseID: 1,
              name: "Rodd",
              type: "Stamina",
              sets: [
                {setID: 10, duration: "20 Minutes", resistence: "6 Växel", status:"open"},
              ],
              resistence: "",
              time: null,
            },
            {
              excerciseID: 2,
              name: "Deadlift",
              type: "Strenght",
              sets: [
                {setID: 1, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 2, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 3, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 4, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 5, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 6, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
              ],
              resistence: "110kg",
              time: null,
            }
          ]
        },
        {
          workoutID: 9,
          name: "Upper body",
          newWeek: true,
          expanded: false,
          inProgress: false,
          excirceses: [
            { 
              excerciseID: 1,
              name: "Rodd",
              type: "Stamina",
              sets: [
                {setID: 10, duration: "20 Minutes", resistence: "6 Växel", status:"open"},
              ],
              resistence: "",
              time: null,
            },
            {
              excerciseID: 2,
              name: "Benchpress",
              type: "Srenght",
              sets: [
                {setID: 1, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 2, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 3, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 4, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 5, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 6, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
              ],
              resistence: "75kg",
              time: null,
            }
          ]
        },
        {
          workoutID: 10,
          newWeek: false,
          expanded: false,
          name: "Full body",
          inProgress: false,
          excirceses: [
            { 
              excerciseID: 1,
              name: "Rodd",
              type: "Stamina",
              sets: [
                {setID: 10, duration: "20 Minutes", resistence: "6 Växel", status:"open"},
              ],
              resistence: "",
              time: null,
            },
            {
              excerciseID: 2,
              name: "Deadlift",
              type: "Strenght",
              sets: [
                {setID: 1, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 2, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 3, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 4, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 5, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 6, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
              ],
              resistence: "110kg",
              time: null,
            }
          ]
        },
        {
          workoutID: 11,
          name: "Lower body",
          newWeek: true,
          expanded: false,
          inProgress: false,
          excirceses: [
            { 
              excerciseID: 1,
              name: "Cykel",
              type: "Stamina",
              sets: [
                {setID: 10, duration: "20 Minutes", resistence: "6 Växel", status:"open"},
              ],
              kilograms: null,
              time: null,
            },
            {
              excerciseID: 2,
              name: "Ben böj",
              type: "Strenght",
              sets: [
                {setID: 1, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 2, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 3, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 4, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 5, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 6, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
              ],
              resistence: "80kg",
              time: null,
            }
          ]
        },
        {
          workoutID: 12,
          name: "Upper body",
          newWeek: false,
          expanded: false,
          inProgress: false,
          excirceses: [
            { 
              excerciseID: 1,
              name: "Rodd",
              type: "Stamina",
              sets: [
                {setID: 10, duration: "20 Minutes", resistence: "6 Växel", status:"open"},
              ],
              resistence: "",
              time: null,
            },
            {
              excerciseID: 2,
              name: "Deadlift",
              type: "Strenght",
              sets: [
                {setID: 1, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 2, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 3, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 4, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 5, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
                {setID: 6, duration: "12 Repetitioner", resistence: "80 kg", status:"open"},
              ],
              resistence: "110kg",
              time: null,
            }
          ]
        },
      ]);
    return(
        <Container style={{padding: "0", marginBottom: "120px"}}>
            <WorkoutList counterActive={counterActive} setCounterActive={setCounterActive} workouts={workouts} setWorkouts={setWorkouts}/>
            <BottomBar counterActive={counterActive} setCounterActive={setCounterActive} setWorkouts={setWorkouts} workouts={workouts}/>
        </Container>
    );
}

export default Home;