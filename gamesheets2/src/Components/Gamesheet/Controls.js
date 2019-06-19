import React, { Component } from "react";

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
        <div>Goal/D's</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>Clock Controls</div>
          <button onClick={this.props.controls.handleClick}>
            Start Game or reset
          </button>
          <button>Time Out</button>
          <div>Game Status: {this.props.controls.gameStart}</div>
        </div>
        <div>Goal/D's</div>
      </div>
    );
  }
}
export default Controls;
