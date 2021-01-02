import React, { } from "react"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


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
      margin: "10px 0 10px 0",
      textAlign: "center"
    }
  }));

const Set = ({set, workouts, workout, exercise, setWorkouts}) => {
    const classes = useStyles();
    const workoutIndex = workouts.findIndex(w => w._id === workout._id )
    const exerciseIndex = workouts[workoutIndex].excirceses.findIndex(ex => ex.excerciseID === exercise.excerciseID)
    const setIndex = workouts[workoutIndex].excirceses[exerciseIndex].sets.findIndex(s => s.setID === set.setID)
    const status = workouts[workoutIndex].excirceses[exerciseIndex].sets[setIndex].status
    let newArray = [...workouts]
    const statusHandler = () => {
    switch(status){
        case 'open':
            newArray[workoutIndex].excirceses[exerciseIndex].sets[setIndex] = 
            {...newArray[workoutIndex].excirceses[exerciseIndex].sets[setIndex], 
            status: "success"}
          break;
        case 'success':
            newArray[workoutIndex].excirceses[exerciseIndex].sets[setIndex] = 
            {...newArray[workoutIndex].excirceses[exerciseIndex].sets[setIndex], 
            status: "fail"}
          break;
        default:
            newArray[workoutIndex].excirceses[exerciseIndex].sets[setIndex] = 
            {...newArray[workoutIndex].excirceses[exerciseIndex].sets[setIndex], 
            status: "open"}
          break;
      }
      setWorkouts(newArray)
      console.log(newArray)
    }
    return(
        <Paper
        onClick={statusHandler}
        variant="outlined"
        square={false}
        className={`${classes.paper} ${set.status === 'fail' ? classes.fail : set.status === 'success' ? classes.success : classes.open}`} 
        >
        <Grid container direction="row">
          <Grid item xs={6} >
            <Typography className={classes.description} gutterBottom variant="subtitle2">
              {set.resistence}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.description} gutterBottom variant="subtitle2">
              {set.duration}
            </Typography>
          </Grid>
        </Grid>
        </Paper>
    );
}

export default Set;

