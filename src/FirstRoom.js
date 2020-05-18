import React from "react";
import Firebase from "./Firebase";
import { GameContext } from "./GameContext";
import { sayHi } from "./Functions";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { createRoom } from "./Functions";

function FirstRoom(props) {
  let gameContext = React.useContext(GameContext);
  React.useEffect(() => {
    console.log(gameContext, "<-----gameContext");
  }, [gameContext]);
  const [numPeople, setNumPeople] = React.useState(null);
  const [rotationSpeed, setRotationSpeed] = React.useState(null);
  const [insanityLevel, setInsanityLevel] = React.useState(null);
  return (
    <div className="App">
      <h1>Out of Character</h1>
      <h2>A Conversational Companion for Video Conferences</h2>
      <h3>How many people? (2-10)</h3>
      <input
        onChange={(e) => {
          setNumPeople(e.target.value);
        }}
        type="number"
        min="2"
        max="10"
      ></input>
      <h3>Rotation Speed?</h3>
      <select onChange={(e) => setRotationSpeed(e.target.value)}>
        <option value="slow">Slow</option>
        <option value="medium">Medium</option>
        <option value="fast">Fast</option>
      </select>
      <h3>Insanity Level (2-10)</h3>
      <input
        onChange={(e) => setInsanityLevel(e.target.value)}
        type="number"
        min="2"
        max="10"
      ></input>
      <button
        onClick={() => {
          let randThing = Math.floor(Math.random() * 11);
          createRoom(gameContext.roomNumber.toString(), {
            numPeople,
            rotationSpeed,
            insanityLevel,
            randThing,
            task: ["Calibrating..."],
            turnNumber: 1,
            gameOver: false,
          });
          sessionStorage.setItem("yourRoom", gameContext.roomNumber);
          console.log(
            gameContext.roomNumber,
            "<---setting this as sessionStorage"
          );
          props.history.push(`/waitingroom/${gameContext.roomNumber}`);
        }}
      >
        Start
      </button>
    </div>
  );
}

export default withRouter(FirstRoom);
