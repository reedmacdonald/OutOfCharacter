import React from "react";
import "./App.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { getSnapshot, updateRoom, getDoc } from "./Functions";
import { level1, level2, level3, Politics, Character } from "./Tasks";
import { Topics } from "./Topics";

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
  const [topic, setTopic] = React.useState("Topic pending");
  React.useEffect(() => {
    getSnapshot(props.match.params.roomNumber, (results) => {
      setNumPeople(results.numPeople);
      task !== results.task && setTask(results.task);
      task2 !== results.taskPlayer2 && setTask2(results.taskPlayer2);
      if (task3 !== results.taskPlayer3) {
        setTask3(results.taskPlayer3);
        console.log("fuck this");
      }
      task4 !== results.taskPlayer4 && setTask4(results.taskPlayer4);
      task5 !== results.taskPlayer5 && setTask5(results.taskPlayer5);
      task6 !== results.taskPlayer6 && setTask6(results.taskPlayer6);
      task7 !== results.taskPlayer7 && setTask7(results.taskPlayer7);
      task8 !== results.taskPlayer8 && setTask8(results.taskPlayer8);
      task9 !== results.taskPlayer9 && setTask9(results.taskPlayer9);
      task10 !== results.taskPlayer10 && setTask10(results.taskPlayer10);
      numPeople !== results.numPeople && setNumPeople(results.numPeople);
      if (results.gameOver == true) {
        props.history.push(
          `/endroom/${props.match.params.roomNumber}/${results.numPeople}`
        );
      }
    });
    setInsanNumber(props.match.params.gameType);
    console.log(
      props.match.params.gameType,
      "<----props.match.parapms.gameType"
    );
  }, []);

  React.useEffect(() => {
    let love;
    if (Number(props.match.params.gameType) == 1) {
      console.log("this is level One");
      love = level1;
    }
    if (Number(props.match.params.gameType) == 2) {
      love = level2;
    }
    if (Number(props.match.params.gameType) == 3) {
      love = level3;
    }
    if (props.match.params.gameType == "characterBased") {
      love = Character;
    }
    if (props.match.params.gameType == "politics") {
      console.log("this is political");
      love = Politics;
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum = Math.floor(Math.random() * love.length);
      let newTask = task.push(love[randNum]);
      /*updateRoom(props.match.params.roomNumber.toString(), {
        task,
      });*/
      setInterval(() => {
        let randNum = Math.floor(Math.random() * love.length);
        let newTask = task.push(love[randNum]);
        updateRoom(props.match.params.roomNumber.toString(), {
          task,
        });
      }, newNum);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum2 = Math.floor(Math.random() * love.length);
      let newTask2 = task2.push(love[randNum2]);
      /*updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer2: task2,
      });*/
      setInterval(() => {
        let randNum2 = Math.floor(Math.random() * love.length);
        let newTask2 = task2.push(love[randNum2]);
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer2: task2,
        });
      }, newNum);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum3 = Math.floor(Math.random() * love.length);
      let newTask3 = task3.push(love[randNum3]);
      /*updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer3: task3,
      });*/
      setInterval(() => {
        let randNum3 = Math.floor(Math.random() * love.length);
        let newTask3 = task3.push(love[randNum3]);
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer3: task3,
        });
      }, newNum);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum4 = Math.floor(Math.random() * love.length);
      let newTask4 = task4.push(love[randNum4]);
      /*updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer4: task4,
      });*/
      setInterval(() => {
        let randNum4 = Math.floor(Math.random() * love.length);
        let newTask4 = task4.push(love[randNum4]);
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer4: task4,
        });
      }, newNum);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum5 = Math.floor(Math.random() * love.length);
      let newTask5 = task5.push(love[randNum5]);
      /*updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer5: task5,
      });*/
      setInterval(() => {
        let randNum5 = Math.floor(Math.random() * love.length);
        let newTask5 = task5.push(love[randNum5]);
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer5: task5,
        });
      }, newNum);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum6 = Math.floor(Math.random() * love.length);
      let newTask6 = task6.push(love[randNum6]);
      /*updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer6: task6,
      });*/
      setInterval(() => {
        let randNum6 = Math.floor(Math.random() * love.length);
        let newTask6 = task6.push(love[randNum6]);
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer6: task6,
        });
      }, newNum);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum7 = Math.floor(Math.random() * love.length);
      let newTask7 = task7.push(love[randNum7]);
      /*updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer7: task7,
      });*/
      setInterval(() => {
        let randNum7 = Math.floor(Math.random() * love.length);
        let newTask7 = task7.push(love[randNum7]);
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer7: task7,
        });
      }, newNum);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum8 = Math.floor(Math.random() * love.length);
      let newTask8 = task8.push(love[randNum8]);
      /*updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer8: task8,
      });*/
      setInterval(() => {
        let randNum8 = Math.floor(Math.random() * love.length);
        let newTask8 = task8.push(love[randNum8]);
        /*updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer8: task8,
        });*/
      }, newNum);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum9 = Math.floor(Math.random() * love.length);
      let newTask9 = task9.push(love[randNum9]);
      /*updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer9: task9,
      });*/
      setInterval(() => {
        let randNum9 = Math.floor(Math.random() * love.length);
        let newTask9 = task9.push(love[randNum9]);
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer9: task9,
        });
      }, newNum);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum10 = Math.floor(Math.random() * love.length);
      let newTask10 = task10.push(love[randNum10]);
      /*updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer10: task10,
      });*/
      setInterval(() => {
        let randNum10 = Math.floor(Math.random() * love.length);
        let newTask10 = task10.push(love[randNum10]);
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer10: task10,
        });
      }, newNum);
    }
  }, []);
  React.useEffect(() => {
    console.log("here task 3");
  }, [task3]);

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
