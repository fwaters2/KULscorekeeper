import React, { Component } from "react";
import "./Gamesheet.css";
import ScoreBoard from "./ScoreBoard";
import Timer from "./Timer";
import Controls from "./Controls";
import Drawer from "./Drawer/Drawer";
import History from "./History";
const HomeTeam = "Galaxy";
const AwayTeam = "Dubble T's";
const rosterHome = ["Steve", "Michael", "Trish", "Betty"];
const rosterAway = ["Juan", "Carlos", "Miguel", "Jorge"];

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
  handleGameStart = () => {
    this.setState({
      gameStart: Date.parse(new Date()) / 1000,
      clockState: "unpaused"
    });
  };
  render() {
    return (
      <div className="Gamesheet">
        <div>
          Title: Gamesheet
          <br />
          This will be the component that will dynamically create any game
          <br /> Sub-Components to include
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Drawer drawer={{ team: HomeTeam, roster: rosterHome }} />
            <div
              className="CentralComponent"
              style={{ display: "flex", flexDirection: "column" }}
            >
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
              <div className="GameClock">
                <Controls
                  controls={{
                    handleClick: this.handleGameStart,
                    gameStart: this.state.clockState
                  }}
                />
              </div>
              <History />
            </div>
            <Drawer drawer={{ team: AwayTeam, roster: rosterAway }} />
          </div>
        </div>
      </div>
    );
  }
}
export default Gamesheet;
