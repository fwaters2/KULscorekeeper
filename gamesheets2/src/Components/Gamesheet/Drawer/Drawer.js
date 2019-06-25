import React, { Component } from "react";
import "./Drawer.css";
import "../../../Assets/PlayerData.json";
const playerData = require("../../../Assets/PlayerData.json");

class Drawer extends Component {
  handleClick = e => {
    this.props.handleNewD(this.props.drawer.team.concat(" ",e.target.id))
    
  };
  render() {
    return (
      <div className="Drawer">
        <div>Drawer for Goal or Defense Event</div>
        <div>Team: {this.currentTeam}</div>
        <div>Roster</div>
        <div>
          {playerData
            .filter(x => x.Team === this.props.drawer.team)
            .map(x => (
              <div id={x.Player} onClick={this.handleClick}>
                {x.Player}
              </div>
            ))}
        </div>
      </div>
    );
  }
}
export default Drawer;
