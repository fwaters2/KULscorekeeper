import React, { Component } from "react";
function StatButtons(props) {
  return (
    <div>
      <div>{props.team}</div>
      <div>Goal/D's</div>
      <button onClick={props.handleClick}>D</button>
    </div>
  );
}
class Controls extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          color: "black"
        }}
      >
        <StatButtons team={this.props.gameInfo.homeTeam} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>Clock Controls</div>
          <button onClick={this.props.controls.handleClick}>
            Start Game or reset
          </button>
          <button>Time Out</button>
          <div>Game Status: {this.props.controls.gameStart}</div>
        </div>
        <StatButtons team={this.props.gameInfo.awayTeam}/>
      </div>
    );
  }
}
export default Controls;
