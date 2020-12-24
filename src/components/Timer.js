import React from "react"
//import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    timer: {
        textAlign: "center"
    },
  }));



const Timer = ({counterActive, setCounterActive}) => {
    const classes = useStyles();

    class Counter extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            elapsedTime: null,
            active: counterActive
          };
      
          this.countUp = this.countUp.bind(this);
          this.startCounting = this.startCounting.bind(this);
        }
      
        startCounting() {
          setInterval(this.countUp, 1000);
          console.log("started counting")
        }
      
        countUp() {
          this.setState(({ elapsedTime }) => ({ elapsedTime: elapsedTime + 1 }));
        }

      
        render() {
          return (
            <div>
              <div>{this.state.elapsedTime}</div>
              {counterActive &&
                this.startCounting
              }
              {!this.state.elapsedTime && (
                <button onClick={this.startCounting}>Start</button>
              )}
            </div>
          );
        }
      }
    return(
        <Grid xs={12} className={classes.timer} >
            <Counter/>
        </Grid>
    );
}

export default Timer;