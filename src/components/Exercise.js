import React, {  } from "react"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Set from './Set'


const useStyles = makeStyles((theme) => ({
    setWrapper: {

    },
    exercise: {
      paddingX: theme.spacing(1),
      margin: 'auto',
      marginTop: "5px",
      paddingTop: "10px"
    },
    exerciseName: {
        textAlign: 'center',
        margin: "auto",
      },
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
          margin: 0,
        },
      },
    success: {
        backgroundColor: "#4F8A10",
        color: "white"
    },
    fail: {
        backgroundColor: "#D8000C",
        color: "white"
    },
  }));

const Exercise = ({exercise, workout, setWorkouts, workouts}) => {
    const sets = exercise.sets;
    const classes = useStyles();
    return(
            <Grid className={classes.exercise} item xs container spacing={2}>
                <Grid xs={4} className={classes.exerciseName}>
                    <Typography variant="body2" color="textSecondary">
                        {exercise.name}
                    </Typography>
                </Grid>
                <Grid className={classes.setWrapper} container xs={12}>
                    {sets.map(set => (
                        <Grid item xs={12}>
                            <Set key={set.setID} set={set} workout={workout} workouts={workouts} setWorkouts={setWorkouts} exercise={exercise}/>        
                        </Grid>
                    ))}
                </Grid>
            </Grid>
    );
}

export default Exercise;