import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Timer from './Timer.js'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
      timer: {
          textAlign: "right"
      }
}));

const TopBar = ({activeWorkout}) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
    <Toolbar>
        <Typography variant="subtitle1" className={classes.title}>
        Mitt gym
        </Typography>
        {activeWorkout && (
            <Typography variant="subtitle1" className={classes.timer}>
            <Timer />
            </Typography>
                    )}
    </Toolbar>
    </AppBar>
  );
}

export default TopBar