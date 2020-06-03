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
      <div id="waitingRoom" className="App" style={{ color: "white" }}>
        <h1>Send these links to your friends</h1>
        <h2>
          These are all slightly different so be careful to send a different one
          to each person
        </h2>
        {peeps.map((val, index) => {
          if (index !== 0 && index !== 1) {
            return (
              <h3>
                https://www.outofcharacter.io/gameroom/
                {gameContext.roomNumber}/{index}/{props.match.params.gameType}
              </h3>
            );
          }
        })}
        <h3>
          https://www.outofcharacter.io/gameroom/{gameContext.roomNumber}/
          {peeps.length}/{props.match.params.gameType}
        </h3>
        <button
          onClick={() => {
            props.history.push(
              `/gameroom/${gameContext.roomNumber}/1/${props.match.params.gameType}`
            );
          }}
          className="buttonOne"
        >
          Start Game
        </button>
      </div>
    </>
  );
};
export default withRouter(WaitingRoom);
