import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Excircese from './Exercise'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0
  },
  paper: {
    paddingY: theme.spacing(2),
    marginX: 0,
  },
  workoutName: {
    textAlign: 'center',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  timer: {
    textAlign: "center"
  }
}));

const Workout = ({workoutIndex, value, setValue, workout, workouts, setWorkouts, setTodos, key, setNewWorkout}) => {
  const classes = useStyles();
  const excirceses = workout.excirceses

  const handleChange = (workout) => {
    console.log("handle change")
    const newArr = workouts.map((w, index) => {
      if(index === workoutIndex){
       return {
        ...w,
        expanded: !w.expanded
       }
      }
      return w
    }) 
    setWorkouts(newArr);
  };
  const newArr = [...workouts]
  const handleClick = () => {
    console.log(newArr.length)
    if(newArr.length === 1){
      setWorkouts([])
    }else{
      newArr.splice(workoutIndex, 1)
      setWorkouts(newArr)
    }
  };
    return(

      <Accordion key={workoutIndex} expanded={workout.expanded} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          style={{marginTop: "2px"}}
          onClick={() => handleChange(workout)}
        >
            <Typography className={classes.heading}>{workout.name}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{padding: "0px"}}>
        <Grid item sm container>
            <Grid item xs>
              {excirceses.map((ex, index) => {
                return <Excircese 
                setNewWorkout={setNewWorkout}
                workoutIndex={workoutIndex} excerciseIndex={index} 
                value={value} setValue={setValue} key={index} workout={workout} workouts={workouts} setWorkouts={setWorkouts} 
                excirceses={excirceses} exercise={ex}/>
              })}
              <span onClick={handleClick}>delete</span>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    );
}

export default Workout;