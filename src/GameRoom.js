import React from "react";
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
  const [task, setTask] = React.useState(["calibrating"]);
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
  React.useEffect(() => {
    getSnapshot(props.match.params.roomNumber, (results) => {
      setNumPeople(results.numPeople);
      setTask(results.task);
      setPersonTurn(results.turnNumber);
    });
    let hmm;
    getDoc(props.match.params.roomNumber, (results) => {
      setInsanNumber(Number(results.insanityLevel));
    });
  }, []);
  React.useEffect(() => {
    console.log("this is it");
    console.log(insanNumber, "<---insanNumber");
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
      setInterval(() => {
        let randNum = Math.floor(Math.random() * 5);
        let newTask = task.push(love[randNum]);
        console.log(love, "<-----love");
        console.log(numPeople, "<----numPeople");
        let newRandNum = Math.floor(Math.random() * Number(numPeople) + 1);
        let turnNumber = newRandNum;

        updateRoom(props.match.params.roomNumber.toString(), {
          task,
          turnNumber,
        });
      }, 10000);
    }
  }, [insanNumber]);
  return (
    <>
      <h2>{personTurn}</h2>

      {props.match.params.playerNumber == personTurn ? (
        <h1>{task[task.length - 1]}</h1>
      ) : (
        <h1>Just act naturally</h1>
      )}
    </>
  );
};
export default withRouter(GameRoom);
