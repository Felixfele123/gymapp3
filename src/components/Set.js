import React, {  } from "react"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import cloneDeep from 'lodash/cloneDeep';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    success: {
        backgroundColor: "#4F8A10",
        color: "white"
    },
    closed: {
      backgroundColor: "#F5F5F5"
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

const Set = ({workoutIndex, excerciseIndex, setIndex, set, workouts, workout, exercise, setWorkouts, newWorkout, setNewWorkout, myElement}) => {
    const classes = useStyles();
    const history = useHistory();

    const handleResistence = (el) => {

      if(el) {
 
        // Align temp input element approximately where the input element is
        // so the cursor doesn't jump around
        var __tempEl__ = document.createElement('input');
        __tempEl__.pattern="[0-9]*"
        __tempEl__.inputmode="decimal"
        __tempEl__.style.position = 'absolute';
        __tempEl__.style.top = (window.pageYOffset || document.documentElement.scrollTop) + 'px';
        __tempEl__.style.left = el.offsetLeft + 'px';
        __tempEl__.style.height = 0;
        __tempEl__.style.opacity = 0;
        // Put this temp element as a child of the page <body> and focus on it
        document.body.appendChild(__tempEl__);
        __tempEl__.focus();
        __tempEl__.addEventListener("input", function(){
 
          if(__tempEl__.value === ""){
            let newObj = cloneDeep(newWorkout)
            newObj.excirceses[excerciseIndex].sets[setIndex].resistence = 0
            setNewWorkout(newObj)
          }else{
            let newObj = cloneDeep(newWorkout)
            newObj.excirceses[excerciseIndex].sets[setIndex].resistence = __tempEl__.value
            setNewWorkout(newObj)
          }
        }, {preventScroll: true});
        // The keyboard is open. Now do a delayed focus on the target element

      }
    }
    const handleDuration = (el) => {
      console.log(el)
      if(document.getElementsByTagName('input')){
        console.log(document.getElementsByTagName('input'))
        console.log("removed")
        const myNode = document.body.getElementsByTagName('input');
        myNode.innerHTML = '';
      }
      if(el) {
        // Align temp input element approximately where the input element is
        // so the cursor doesn't jump around
        var __tempEl__ = document.createElement('input');
        __tempEl__.pattern="[0-9]*"
        __tempEl__.inputmode="decimal"
        __tempEl__.style.position = 'absolute';
        __tempEl__.style.top = (window.pageYOffset || document.documentElement.scrollTop) + 'px';
        __tempEl__.style.left = el.offsetLeft + 'px';
        __tempEl__.style.height = 0;
        __tempEl__.style.opacity = 0;
        // Put this temp element as a child of the page <body> and focus on it
        document.body.appendChild(__tempEl__);
        __tempEl__.id="temp"
        __tempEl__.focus();
        __tempEl__.addEventListener("input", function(){
 
          if(__tempEl__.value === ""){
            let newObj = cloneDeep(newWorkout)
            newObj.excirceses[excerciseIndex].sets[setIndex].duration = 0
            setNewWorkout(newObj)
          }else{
            let newObj = cloneDeep(newWorkout)
            newObj.excirceses[excerciseIndex].sets[setIndex].duration = __tempEl__.value
            setNewWorkout(newObj)
          }
        });
        __tempEl__.addEventListener("focusout", function(){
          document.body.removeChild(__tempEl__);
        });
        // The keyboard is open. Now do a delayed focus on the target element
      }
      history.push("/ActiveWorkout");
    }

    return(
        <Paper
        variant="outlined"
        square={false}
        className={`${classes.paper} ${set.status === 'closed' ? classes.closed : classes.open}`}
        >
        <Grid container direction="row">
          <Grid item xs={6} >
            <Typography id="my-element" onClick={() => handleResistence(myElement)} className={classes.description} gutterBottom variant="subtitle2">
              {set.resistence} {set.resistencePrefix}   
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography onClick={() => handleDuration(myElement)} className={classes.description} variant="subtitle2">
              {set.duration} {set.durationPrefix}
            </Typography>
          </Grid>
        </Grid>
        </Paper>
    );
}

export default Set;

