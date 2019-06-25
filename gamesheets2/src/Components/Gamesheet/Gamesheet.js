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
      clockState: "paused",
      currentDs: []
    };
  }
  handleGameStart = () => {
    this.setState({
      gameStart: Date.parse(new Date()) / 1000,
      clockState: "unpaused"
    });
  };
  handleNewD = (e) => {
    this.setState({
      currentDs: [...this.state.currentDs,e]
    })
  }
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
            <Drawer
              drawer={{
                team: this.props.gameInfo.HomeTeam,
                roster: rosterHome
              }}
              handleNewD={this.handleNewD}
            />
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
                gameInfo={this.props.gameInfo}
              />
              <div className="GameClock">
                <Controls
                  gameInfo={this.props.gameInfo}
                  controls={{
                    handleClick: this.handleGameStart,
                    gameStart: this.state.clockState
                  }}
                />
              </div>
              <History Ds={this.state.currentDs}/>
            </div>
            <Drawer
              drawer={{
                team: this.props.gameInfo.AwayTeam,
                roster: rosterAway
              }}
              handleNewD={this.handleNewD}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Gamesheet;
