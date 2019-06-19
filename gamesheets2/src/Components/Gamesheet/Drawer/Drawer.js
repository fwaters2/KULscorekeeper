import React, { Component } from "react";
import "./Drawer.css";

class Drawer extends Component {
  render() {
    return (
      <div className="Drawer">
        <div>Drawer for Goal or Defense Event</div>
        <div>Team: {this.props.drawer.team}</div>
        <div>Roster</div>
        <div>
          {this.props.drawer.roster.map(x => (
            <div>{x}</div>
          ))}
        </div>
      </div>
    );
  }
}
export default Drawer;
