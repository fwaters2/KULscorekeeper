import React, { Component } from "react";
import { thisExpression } from "@babel/types";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSeconds: 0,
      currentTime: "00:00",
      gameStartTime: ""
    };
  }

  componentDidMount() {
    var countUp = setInterval(() => this.myCounter(), 1000);
    this.setState({
      clockState: this.props.clock.state,
      gameStartTime: this.props.clock.gameStart
    })
  }
  myCounter() {
    var seconds = (Date.parse(new Date())/1000)-this.props.clock.gameStart;
    var secondOnes = seconds%10
    var secondTens = Math.floor(seconds/10)%6
    var minutesOnes =Math.floor(seconds/60)%10
    var minutesTens = Math.floor(seconds/600)
    this.props.clock.state==="paused" ?  this.setState({currentTime:"00:00"}) :
    this.setState({
      currentSeconds: seconds,
      currentTime: minutesTens.toString()+minutesOnes.toString()+":"+secondTens.toString()+secondOnes.toString()
    })
  }

  render() {
    return this.state.currentTime;
  }
}
export default Timer;
