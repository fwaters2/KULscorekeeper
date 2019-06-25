import React, { Component } from "react";
import "./ChooseGame.css";
import "../../Assets/GameData.json";
const gameList = require("../../Assets/GameData.json");
const gameList2 = [
  { GameID: 4, HomeTeam: "Galaxy", AwayTeam: "Dubble T's", Time: "12:30pm" },
  { GameID: 5, HomeTeam: "Annapurna", AwayTeam: "Love Train", Time: "12:30pm" },
  { GameID: 6, HomeTeam: "Galaxy", AwayTeam: "Road Warriors", Time: "2:30pm" },
  {
    GameID: 7,
    HomeTeam: "Disc Hunters",
    AwayTeam: "Love Train",
    Time: "2:30pm"
  }
];

class ChooseGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "3/16/2019"
    };
  }
  handleChange = e => {
    this.setState({
      date: e.target.value
    });
  };
  onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  handleClick = e => {
    this.props.gameChoice(
      gameList.filter(game => game.GameID == e.target.id)[0]
    );
  };
  render() {
    return (
      <div className="ChooseGame">
        <div>Title: Choose Game</div>
        <div>
          Here There will be a list of games available to keep score that
          closely matches the format of the schedule
        </div>
        <div className="List-Title">Games we need you to scorekeep:</div>
        <select
          value={this.state.date}
          id="dateSelector"
          onChange={this.handleChange}
        >
          {gameList
            .map(x => x.Date)
            .filter(this.onlyUnique)
            .map(uniqueDates => (
              <option value={uniqueDates}>{uniqueDates}</option>
            ))}
        </select>
        <table className="List-Container">
          <thead className="List-Row">
            <td className="List-time">Time</td>
            <td className="List-Item">Field 1</td>
            <td className="List-Item">Field 2</td>
          </thead>
          {gameList
          
          .filter( x => x.Date === this.state.date
            )
            .map(x => x.Time)
            .filter(this.onlyUnique)
            .map(uniqueTime => (
              <tr className="List-Row">
                <td className="List-time">{uniqueTime}</td>
                {gameList
                .filter( x => x.Date === this.state.date
                  )
                  .filter(x => x.Time === uniqueTime)
                  .map(x => (
                    <td
                      className="List-Item"
                      key={x.GameID}
                      id={x.GameID}
                      onClick={this.handleClick}
                    >
                      {x.HomeTeam} vs {x.AwayTeam}
                    </td>
                  ))}
              </tr>
            ))}
        </table>
      </div>
    );
  }
}
export default ChooseGame;
