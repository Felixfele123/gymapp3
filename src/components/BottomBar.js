
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
  },
  title: {
    flexGrow: 1,
  },
  buttom: {
      width: "100%",
      textAlign: 'center',
      margin: 0,
      padding: 0,
      height: "auto"
  },
  appBar: {
    height: "auto",
    top: 'auto',
    bottom: 0,
    margin: 0,
    padding: 0,
  },
  toolbar: {
    height: "100px",
    textAlign: 'center', 
    margin: 0,
    padding: 0,
  }
}));

const BottomBar = ({setWorkouts, workouts}) => {
  const classes = useStyles();
  
  const handleClick = () => {
    const newArr = workouts.map(w => {
      if(w.workoutID === 2){
       return {
        ...w,
        expanded: !w.expanded,
        inProgress: true
       }
      }
      return w
    }) 
    setWorkouts(newArr);
  };
  return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Button onClick={handleClick} className={classes.buttom} color="inherit">
          <Typography variant="h5">
              Start Workout
            </Typography>
          </Button>
        </Toolbar>
      </AppBar> 
  );
}

export default BottomBar