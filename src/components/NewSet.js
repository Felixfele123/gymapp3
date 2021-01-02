import React, { } from "react"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

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
      maxHeight: "41px"
    },
    open: {
      backgroundColor: "#C0C0C0"
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
    let newArray = [...workouts]
    const statusHandler = () => {
        newArray[workoutIndex].excirceses[exerciseIndex].sets.push(
            {
                setID: newArray[workoutIndex].excirceses[exerciseIndex].sets.length + 2,
                duration: "12 reps",
                resistence: "80 kg",
                status: "open"
            }
        )
        setWorkouts(newArray)
    }
    return(
        <Paper
        onClick={statusHandler}
        variant="outlined"
        square={false}
        className={`${classes.paper} ${classes.open}`} 
        >
        <Grid container direction="row">
          <Grid item xs={12}>
            <Typography className={classes.description} gutterBottom variant="subtitle2">
              <AddIcon style={{height: "20px", inline:false}} inline="true"/>
            </Typography>
          </Grid>
        </Grid>
        </Paper>
    );
}

export default Set;

