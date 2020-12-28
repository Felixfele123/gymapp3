import React, { useState, useEffect } from "react"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import axios from 'axios'
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    success: {
        backgroundColor: "#4F8A10",
        color: "white"
    },
    fail: {
        backgroundColor: "#D8000C",
        color: "white"
    },
    paper: {
      paddingY: theme.spacing(2),
      margin: 'auto',
      marginTop: "20px",
      maxWidth: 500,
    },
    open: {
      backgroundColor: "#F5F5F5"
    },
    description: {
      margin: "10px 0 10px 0",
    },
  }));

const Workout = ({workouts, setWorkouts}) => {
  useEffect(() => {
    fetchWorkouts() 
}, [])
const history = useHistory();
const [newWorkoutList, setNewWorkoutList] = useState([]);
const classes = useStyles();
const fetchWorkouts = async () => {
    const data = await axios({
        method: 'get',
        url: 'https://api-mygym.herokuapp.com/workout',
        withCredentials: true
      });
    const workouts = data.data
  console.log(workouts)
  setNewWorkoutList(workouts)
  }
const startWorkout = (w) => {
    w.active = true;
    w.expanded = true;
    workouts.push(w)
    console.log(workouts)
    setWorkouts(workouts)
    history.push("/");
}

    return(
        <Container style={{padding: "0", marginBottom: "120px"}}>
            {newWorkoutList.map(w => {
                return <Paper
                variant="outlined"
                square={true}
                onClick={() => startWorkout(w)}
                >
                <Grid justify="center" container direction="row">
                    <Grid item xs={10} >
                        <Typography className={classes.description} gutterBottom variant="subtitle2">
                            {w.name}    
                        </Typography>
                    </Grid>
                </Grid>
                </Paper>
            })}
        </Container>
    )

}

export default Workout;