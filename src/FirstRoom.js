import React from "react";
import Firebase from "./Firebase";
import "./App.css";
import { GameContext } from "./GameContext";
import { sayHi } from "./Functions";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { createRoom } from "./Functions";
import "./App.css";

function FirstRoom(props) {
  let gameContext = React.useContext(GameContext);
  const [numPeople, setNumPeople] = React.useState(2);
  const [rotationSpeed, setRotationSpeed] = React.useState("slow");
  const [insanityLevel, setInsanityLevel] = React.useState(2);
  return (
    <div className="App">
      <h1 id="title" style={{ color: "red" }}>
        Out of Character
      </h1>
      <h2 style={{ color: "blue" }}>
        A Conversational Companion for Video Conferences
      </h2>
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
        max="6"
      ></input>
      <br />
      <button
        onClick={() => {
          let randThing = Math.floor(Math.random() * 11);
          createRoom(gameContext.roomNumber.toString(), {
            numPeople,
            rotationSpeed,
            insanityLevel,
            randThing,
            task: [
              "Take a long sip of coffee. If you don't have coffee, get it",
            ],
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
        Start Game
      </button>
    </div>
  );
}

export default withRouter(FirstRoom);
