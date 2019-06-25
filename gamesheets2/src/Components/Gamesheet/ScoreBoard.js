import React from "react";


function ScoreBoard(props) {
  //imported from props
  const stuff = {

    homeScore: 12,
    awayScore: 15,
    time: "12:34",
    half: "2"
  };
  const homeScoreTens = Math.floor(stuff.homeScore / 10);
  const homeScoreOnes = stuff.homeScore % 10;
  const awayScoreTens = Math.floor(stuff.awayScore / 10);
  const awayScoreOnes = stuff.awayScore % 10;

  return (
    <div className="Scoreboard">
      <div className="Scores">
        <div className="Panel Border">
          <div className="TeamName">{props.gameInfo.HomeTeam}</div>
          <div className="Score">
            <div className="Digital Digit">{homeScoreTens}</div>
            <div className="Digital Digit">{homeScoreOnes}</div>
          </div>
        </div>
        <div className="Panel">
          <div className="HalfSection">
            <div className="Digital Half Border">{stuff.half}</div>
            <div className="smallFont">{"Half"}</div>
          </div>
          <div className="Digital Time Border">{props.stuff}</div>
        </div>
        <div className="Panel Border">
          <div className="TeamName">{props.gameInfo.AwayTeam}</div>
          <div className="Score">
            <div className="Digital Digit">{awayScoreTens}</div>
            <div className="Digital Digit">{awayScoreOnes}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ScoreBoard;
