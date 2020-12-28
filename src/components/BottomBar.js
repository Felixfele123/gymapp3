
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

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
      height: "56px",
      margin: 0,
      padding: 0,
  },
  appBar: {
    height: "auto",
    top: 'auto',
    bottom: 0,
    margin: 0,
    padding: 0,
  },
  toolbar: {
    height: "40px",
    textAlign: 'center', 
    margin: 0,
    padding: 0,
  }
}));

const BottomBar = ({activeWorkout, setActiveWorkout}) => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    setActiveWorkout(true);
    history.push("/newWorkout");
  };
  return (
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Button onClick={handleClick} className={classes.buttom} color="inherit">
          <Typography variant="subtitle1">
              Start Workout
          </Typography>
          </Button>
        </Toolbar>
      </AppBar> 
  );
}

export default BottomBar