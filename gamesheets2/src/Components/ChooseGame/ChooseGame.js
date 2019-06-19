import React, { Component } from "react";
import "./ChooseGame.css";
const gameList = [
  { homeTeam: "Galaxy", awayTeam: "Dubble T's" },
  { homeTeam: "Annapurna", awayTeam: "Love Train" }
];

class ChooseGame extends Component {
  render() {
    return (
      <div className="ChooseGame">
        <div>Title: Choose Game</div>
        <div>
          Here There will be a list of games available to keep score that
          closely matches the format of the schedule
        </div>
        <div className="List-Title">Games we need you to scorekeep:</div>
        <div className="List-Container">{gameList.map(x=>(
            <div className="List-Item">{x.homeTeam} vs {x.awayTeam}</div>
        ))}
        </div>
      </div>
    );
  }
}
export default ChooseGame;
