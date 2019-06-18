import React, { Component } from "react";
import "./Gamesheet.css";
import ScoreBoard from "./ScoreBoard";
import Timer from "./Timer";

class Gamesheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //This state is only temporary and will eventually be derived from props
      gameID: 412,
      home: "Team 1",
      away: "Team 2",
      gameStart: "",
      clockState: "paused"
    };
  }
  handleClick = () => {
    this.setState({
      gameStart: Date.parse(new Date()) / 1000,
      clockState: "unpaused"
    });
    console.log("triggered");
    console.log(this.state.clockState)
  };
  render() {
    return (
      <div className="Gamesheet">
        <div>
          Title: Gamesheet
          <br />
          This will be the component that will dynamically create any game
          <div>
            Sub-Components to include
            <div className="GameClock">
              <div>Clock Controls</div>
              <button onClick={this.handleClick}>Start Game or reset</button>
              <div>GameStarted:{this.state.gameStart}</div>
            </div>
            <ScoreBoard
              stuff={
                <Timer
                  clock={{
                    state: this.state.clockState,
                    gameStart: this.state.gameStart
                  }}
                />
              }
            />
            <div className="Drawer">Drawer for Goal or Defense Event</div>
            <div className="History">Container for Goals or Ds</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Gamesheet;
