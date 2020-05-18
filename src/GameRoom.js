import React from "react";
import "./App.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { getSnapshot, updateRoom, getDoc } from "./Functions";
import {
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
  level7,
  level8,
  level9,
  level10,
} from "./Tasks";

const GameRoom = (props) => {
  const [task, setTask] = React.useState([
    "Take a long sip of coffee. If you don't have coffee, get it",
  ]);
  const [numPeople, setNumPeople] = React.useState(1);
  const [insanityLevel, setInsanityLevel] = React.useState([
    "idk",
    "idk",
    "idk",
    "idk",
    "idk",
    "idk",
  ]);
  const [personTurn, setPersonTurn] = React.useState(1);
  const [insanNumber, setInsanNumber] = React.useState(1);
  const [rotationSpeed, setRotationSpeed] = React.useState(10000);
  React.useEffect(() => {
    getSnapshot(props.match.params.roomNumber, (results) => {
      setNumPeople(results.numPeople);
      setTask(results.task);
      setPersonTurn(results.turnNumber);
      //console.log(results, "<---results");
      if (results.rotationSpeed == "fast") {
        setRotationSpeed(50000);
      }
      if (results.rotationSpeed == "medium") {
        setRotationSpeed(100000);
      }
      if (results.rotationSpeed == "slow") {
        setRotationSpeed(150000);
      }
      if (results.gameOver == true) {
        props.history.push(`/endroom/${props.match.params.roomNumber}`);
      }
    });
    let hmm;

    getDoc(props.match.params.roomNumber, (results) => {
      setInsanNumber(Number(results.insanityLevel));
    });
  }, []);
  React.useEffect(() => {
    let love;
    if (insanNumber == 1) {
      love = level1;
    }
    if (insanNumber == 2) {
      love = level2;
    }
    if (insanNumber == 3) {
      love = level3;
    }
    if (insanNumber == 4) {
      love = level4;
    }
    if (insanNumber == 5) {
      love = level5;
    }
    if (insanNumber == 6) {
      love = level6;
    }
    if (insanNumber == 7) {
      love = level7;
    }
    if (insanNumber == 8) {
      love = level8;
    }
    if (insanNumber == 9) {
      love = level9;
    }
    if (insanNumber == 10) {
      love = level10;
    }

    if (props.match.params.playerNumber == 1) {
      insanNumber !== 1 &&
        setInterval(() => {
          let randNum = Math.floor(Math.random() * 21);
          let newTask = task.push(love[randNum]);

          let newRandNum = Math.floor(Math.random() * Number(numPeople) + 1);
          let turnNumber = newRandNum;

          updateRoom(props.match.params.roomNumber.toString(), {
            task,
            turnNumber,
          });
        }, rotationSpeed);
    }
  }, [insanNumber]);
  return (
    <>
      {props.match.params.playerNumber == personTurn ? (
        <h1>{task[task.length - 1]}</h1>
      ) : (
        <h1>Just act naturally</h1>
      )}
      {props.match.params.playerNumber == 1 && (
        <button
          onClick={() => {
            updateRoom(props.match.params.roomNumber.toString(), {
              gameOver: true,
            });
          }}
        >
          End Game
        </button>
      )}
    </>
  );
};
export default withRouter(GameRoom);
