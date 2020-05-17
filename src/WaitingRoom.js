import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { GameContext } from "./GameContext";

const WaitingRoom = (props) => {
  const gameContext = React.useContext(GameContext);
  const [peeps, setPeeps] = React.useState(["idk"]);
  React.useEffect(() => {
    let array1 = new Array(Number(gameContext.numPeople)).fill("x");

    setPeeps(array1);
  }, [gameContext]);
  return (
    <>
      <h1>Send this link to your friends:</h1>
      {peeps.map((val, index) => {
        if (index !== 0 && index !== 1) {
          return (
            <h1>
              localhost:8060/gameroom/{gameContext.roomNumber}/{index}
            </h1>
          );
        }
      })}
      <button
        onClick={() => {
          props.history.push(`/gameroom/${gameContext.roomNumber}/1`);
        }}
      >
        Start Game
      </button>
    </>
  );
};
export default withRouter(WaitingRoom);
