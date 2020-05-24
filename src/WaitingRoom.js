import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { GameContext } from "./GameContext";
import "./App.css";

const WaitingRoom = (props) => {
  const gameContext = React.useContext(GameContext);
  const [peeps, setPeeps] = React.useState(["idk"]);
  React.useEffect(() => {
    let array1 = new Array(Number(gameContext.numPeople)).fill("x");

    setPeeps(array1);
  }, [gameContext]);
  return (
    <>
      <div className="App">
        <h1>Send this link to your friends:</h1>
        {peeps.map((val, index) => {
          if (index !== 0 && index !== 1) {
            return (
              <h1>
                https://out-of-character.netlify.app/gameroom/
                {gameContext.roomNumber}/{index}/{props.match.params.gameType}
              </h1>
            );
          }
        })}
        <h1>
          https://out-of-character.netlify.app/gameroom/{gameContext.roomNumber}
          /{peeps.length}/{props.match.params.gameType}
        </h1>
        <button
          onClick={() => {
            props.history.push(
              `/gameroom/${gameContext.roomNumber}/1/${props.match.params.gameType}`
            );
          }}
        >
          Start Game
        </button>
      </div>
    </>
  );
};
export default withRouter(WaitingRoom);
