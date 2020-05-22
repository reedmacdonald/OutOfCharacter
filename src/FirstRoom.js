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
  const [insanityLevel, setInsanityLevel] = React.useState(1);
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

      <h3>Game Type</h3>
      <select onChange={(e) => setInsanityLevel(e.target.value)}>
        <option value={1}>Absurdity Level 1</option>
        <option value={2}>Absurdity Level 2</option>
        <option value={3}>Absurdity Level 3</option>
        <option value={"characterBased"}>Character Based</option>
        <option value={"politics"}>Politics</option>
      </select>
      <br />
      <button
        onClick={() => {
          let randThing = Math.floor(Math.random() * 11);
          createRoom(gameContext.roomNumber.toString(), {
            numPeople,
            rotationSpeed,
            insanityLevel,
            randThing,
            task: ["Make some small-talk to get things going"],
            taskPlayer2: ["Make some small-talk to get things going"],
            taskPlayer3: ["Make some small-talk to get things going"],
            taskPlayer4: ["Make some small-talk to get things going"],
            taskPlayer5: ["Make some small-talk to get things going"],
            taskPlayer6: ["Make some small-talk to get things going"],
            taskPlayer7: ["Make some small-talk to get things going"],
            taskPlayer8: ["Make some small-talk to get things going"],
            taskPlayer9: ["Make some small-talk to get things going"],
            taskPlayer10: ["Make some small-talk to get things going"],
            turnNumber: 1,
            gameOver: false,
            unveil: 0,
            topic: "Calibrating",
          });
          sessionStorage.setItem("yourRoom", gameContext.roomNumber);
          props.history.push(
            `/waitingroom/${gameContext.roomNumber}/${insanityLevel}`
          );
        }}
      >
        Start Game
      </button>
    </div>
  );
}

export default withRouter(FirstRoom);
