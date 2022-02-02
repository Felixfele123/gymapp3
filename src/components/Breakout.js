import React from "react"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import '../treirad.css';

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
    },
    open: {
      backgroundColor: "#F5F5F5"
    },
    description: {
      margin: "20px 0 20px 0",
    },
    headline: {
        marginY: "10px"
    },
    button: {
        textAlign: "center",
        marginTop: "30px"
    },
    Lowerbody: {
        borderColor: "#3f51b5"
    },
  }));

const Breakout = ({workouts, setWorkouts, newWorkout, setNewWorkout, newWorkoutList, setNewWorkoutList}) => {

const classes = useStyles();
const handleClick = (w) => {
    setNewWorkoutList(newWorkoutList.map(NW => { 
        if(NW.name === w.name){
            setNewWorkout({...NW, active: true})
            return{
                ...NW,
                active: true,
            }
        }
        return {
            ...NW,
            active: false
        }
    }))
  };

    return(
    <Container style={{padding: "0", marginTop: "56px"}}>
          <section id="game">
            <canvas id="breakoutCanvas" width="800" height="600"></canvas>
          </section>

        </Container>
    )

}

export default Breakout;