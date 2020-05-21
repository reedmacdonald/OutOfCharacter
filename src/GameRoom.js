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
    "Make some small-talk to get things going",
  ]);
  const [task2, setTask2] = React.useState([
    "Make some small-talk to get things going",
  ]);
  const [task3, setTask3] = React.useState([
    "Make some small-talk to get things going",
  ]);
  const [task4, setTask4] = React.useState([
    "Make some small-talk to get things going",
  ]);
  const [task5, setTask5] = React.useState([
    "Make some small-talk to get things going",
  ]);
  const [task6, setTask6] = React.useState([
    "Make some small-talk to get things going",
  ]);
  const [task7, setTask7] = React.useState([
    "Make some small-talk to get things going",
  ]);
  const [task8, setTask8] = React.useState([
    "Make some small-talk to get things going",
  ]);
  const [task9, setTask9] = React.useState([
    "Make some small-talk to get things going",
  ]);
  const [task10, setTask10] = React.useState([
    "Make some small-talk to get things going",
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
      setTask2(results.taskPlayer2);
      setTask3(results.taskPlayer3);
      setTask4(results.taskPlayer4);
      setTask5(results.taskPlayer5);
      setTask6(results.taskPlayer6);
      setTask7(results.taskPlayer7);
      setTask8(results.taskPlayer8);
      setTask9(results.taskPlayer9);
      setTask10(results.taskPlayer10);
      setPersonTurn(results.turnNumber);
      setNumPeople(results.numPeople);
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
        props.history.push(
          `/endroom/${props.match.params.roomNumber}/${results.numPeople}`
        );
      }
    });
    let hmm;

    getDoc(props.match.params.roomNumber, (results) => {
      Number(Number(results.insanityLevel)) !== insanNumber &&
        setInsanNumber(Number(results.insanityLevel));
      console.log("here8");
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
      let newNum = Math.floor(Math.random() * 40000) + 35000;
      insanNumber !== 1 &&
        setInterval(() => {
          let randNum = Math.floor(Math.random() * love.length);
          let newTask = task.push(love[randNum]);
          let randNum2 = Math.floor(Math.random() * love.length);
          let newTask2 = task2.push(love[randNum2]);
          let newRandNum = Math.floor(Math.random() * Number(numPeople) + 1);
          let turnNumber = newRandNum;
          updateRoom(props.match.params.roomNumber.toString(), {
            task,
          });
        }, newNum);
    }
    if (props.match.params.playerNumber == 1 && insanNumber != 1) {
      let newNum = Math.floor(Math.random() * 40000) + 35000;
      insanNumber != 1 &&
        setInterval(() => {
          let randNum2 = Math.floor(Math.random() * love.length);
          let newTask2 = task2.push(love[randNum2]);
          updateRoom(props.match.params.roomNumber.toString(), {
            taskPlayer2: task2,
          });
        }, newNum);
    }
    if (props.match.params.playerNumber == 1 && insanNumber != 1) {
      let newNum = Math.floor(Math.random() * 40000) + 35000;
      insanNumber !== 1 &&
        setInterval(() => {
          let randNum3 = Math.floor(Math.random() * love.length);
          let newTask3 = task3.push(love[randNum3]);
          updateRoom(props.match.params.roomNumber.toString(), {
            taskPlayer3: task3,
          });
        }, newNum);
    }
    if (props.match.params.playerNumber == 1 && insanNumber != 1) {
      let newNum = Math.floor(Math.random() * 40000) + 35000;
      insanNumber !== 1 &&
        setInterval(() => {
          let randNum4 = Math.floor(Math.random() * love.length);
          let newTask4 = task4.push(love[randNum4]);
          updateRoom(props.match.params.roomNumber.toString(), {
            taskPlayer4: task4,
          });
        }, newNum);
    }
    if (props.match.params.playerNumber == 1 && insanNumber != 1) {
      let newNum = Math.floor(Math.random() * 40000) + 35000;
      insanNumber !== 1 &&
        setInterval(() => {
          let randNum5 = Math.floor(Math.random() * love.length);
          let newTask5 = task5.push(love[randNum5]);
          updateRoom(props.match.params.roomNumber.toString(), {
            taskPlayer5: task5,
          });
        }, newNum);
    }
    if (props.match.params.playerNumber == 1 && insanNumber != 1) {
      let newNum = Math.floor(Math.random() * 40000) + 35000;
      insanNumber !== 1 &&
        setInterval(() => {
          let randNum6 = Math.floor(Math.random() * love.length);
          let newTask6 = task6.push(love[randNum6]);
          updateRoom(props.match.params.roomNumber.toString(), {
            taskPlayer6: task6,
          });
        }, newNum);
    }
    if (props.match.params.playerNumber == 1 && insanNumber != 1) {
      let newNum = Math.floor(Math.random() * 40000) + 35000;
      insanNumber !== 1 &&
        setInterval(() => {
          let randNum7 = Math.floor(Math.random() * love.length);
          let newTask7 = task7.push(love[randNum7]);
          updateRoom(props.match.params.roomNumber.toString(), {
            taskPlayer7: task7,
          });
        }, newNum);
    }
    if (props.match.params.playerNumber == 1 && insanNumber != 1) {
      let newNum = Math.floor(Math.random() * 40000) + 35000;
      insanNumber !== 1 &&
        setInterval(() => {
          let randNum8 = Math.floor(Math.random() * love.length);
          let newTask8 = task8.push(love[randNum8]);
          updateRoom(props.match.params.roomNumber.toString(), {
            taskPlayer8: task8,
          });
        }, newNum);
    }
    if (props.match.params.playerNumber == 1 && insanNumber != 1) {
      let newNum = Math.floor(Math.random() * 40000) + 35000;
      insanNumber !== 1 &&
        setInterval(() => {
          let randNum9 = Math.floor(Math.random() * love.length);
          let newTask9 = task9.push(love[randNum9]);
          updateRoom(props.match.params.roomNumber.toString(), {
            taskPlayer9: task9,
          });
        }, newNum);
    }
    if (props.match.params.playerNumber == 1 && insanNumber != 1) {
      let newNum = Math.floor(Math.random() * 40000) + 35000;
      insanNumber !== 1 &&
        setInterval(() => {
          let randNum10 = Math.floor(Math.random() * love.length);
          let newTask10 = task10.push(love[randNum10]);
          updateRoom(props.match.params.roomNumber.toString(), {
            taskPlayer10: task10,
          });
        }, newNum);
    }
  }, [insanNumber]);
  return (
    <>
      {props.match.params.playerNumber == 1 && <h1>{task[task.length - 1]}</h1>}
      {props.match.params.playerNumber == 2 && (
        <h1>{task2[task2.length - 1]}</h1>
      )}
      {props.match.params.playerNumber == 3 && (
        <h1>{task3[task3.length - 1]}</h1>
      )}
      {props.match.params.playerNumber == 4 && (
        <h1>{task4[task4.length - 1]}</h1>
      )}
      {props.match.params.playerNumber == 5 && (
        <h1>{task5[task5.length - 1]}</h1>
      )}
      {props.match.params.playerNumber == 6 && (
        <h1>{task6[task6.length - 1]}</h1>
      )}
      {props.match.params.playerNumber == 7 && (
        <h1>{task7[task7.length - 1]}</h1>
      )}
      {props.match.params.playerNumber == 8 && (
        <h1>{task8[task8.length - 1]}</h1>
      )}
      {props.match.params.playerNumber == 9 && (
        <h1>{task9[task9.length - 1]}</h1>
      )}
      {props.match.params.playerNumber == 10 && (
        <h1>{task10[task10.length - 1]}</h1>
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
