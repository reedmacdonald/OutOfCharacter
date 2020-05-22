import React from "react";
import "./App.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { getSnapshot, updateRoom, getDoc } from "./Functions";
import { level1, level2, level3, Politics, Character } from "./Tasks";
import { Topics } from "./Topics";

const GameRoom = (props) => {
  const [task, setTask] = React.useState(["Make "]);
  const [task2, setTask2] = React.useState(["Make"]);
  const [task3, setTask3] = React.useState(["Make"]);
  const [task4, setTask4] = React.useState(["Make"]);
  const [task5, setTask5] = React.useState(["Make"]);
  const [task6, setTask6] = React.useState(["Make"]);
  const [task7, setTask7] = React.useState(["Make"]);
  const [task8, setTask8] = React.useState(["Make"]);
  const [task9, setTask9] = React.useState(["Make"]);
  const [task10, setTask10] = React.useState(["Make"]);
  const [numPeople, setNumPeople] = React.useState(1);
  const [insanityLevel, setInsanityLevel] = React.useState(["idk"]);
  const [personTurn, setPersonTurn] = React.useState(1);
  const [insanNumber, setInsanNumber] = React.useState(1);
  const [rotationSpeed, setRotationSpeed] = React.useState(10000);
  const [topic, setTopic] = React.useState("Topic pending");
  React.useEffect(() => {
    getSnapshot(props.match.params.roomNumber, (results) => {
      setNumPeople(results.numPeople);
      task !== results.task && setTask(results.task);
      task2 !== results.taskPlayer2 && setTask2(results.taskPlayer2);
      task3 !== results.taskPlayer3 && setTask3(results.taskPlayer3);
      task4 !== results.taskPlayer4 && setTask4(results.taskPlayer4);
      task5 !== results.taskPlayer5 && setTask5(results.taskPlayer5);
      task6 !== results.taskPlayer6 && setTask6(results.taskPlayer6);
      task7 !== results.taskPlayer7 && setTask7(results.taskPlayer7);
      task8 !== results.taskPlayer8 && setTask8(results.taskPlayer8);
      task9 !== results.taskPlayer9 && setTask9(results.taskPlayer9);
      task10 !== results.taskPlayer10 && setTask10(results.taskPlayer10);
      setNumPeople(results.numPeople);
      if (results.gameOver == true) {
        props.history.push(
          `/endroom/${props.match.params.roomNumber}/${results.numPeople}`
        );
      }
    });
    setInsanNumber(props.match.params.gameType);
  }, []);

  React.useEffect(() => {
    let category;
    if (Number(props.match.params.gameType) == 1) category = level1;
    if (Number(props.match.params.gameType) == 2) category = level2;
    if (Number(props.match.params.gameType) == 3) category = level3;
    if (props.match.params.gameType == "characterBased") category = Character;
    if (props.match.params.gameType == "politics") category = Politics;
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum = Math.floor(Math.random() * category.length);
      let newTask = task.push(category[randNum]);
      updateRoom(props.match.params.roomNumber.toString(), {
        task,
      });
      setOnePlayerOne(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum2 = Math.floor(Math.random() * category.length);
      let newTask2 = task2.push(category[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer2: task2,
      });
      setOnePlayerTwo(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum3 = Math.floor(Math.random() * category.length);
      let newTask3 = task3.push(category[randNum3]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer3: task3,
      });
      setOnePlayerThree(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum4 = Math.floor(Math.random() * category.length);
      let newTask4 = task4.push(category[randNum4]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer4: task4,
      });
      setOnePlayerFour(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum5 = Math.floor(Math.random() * category.length);
      let newTask5 = task5.push(category[randNum5]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer5: task5,
      });
      setOnePlayerFive(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum6 = Math.floor(Math.random() * category.length);
      let newTask6 = task6.push(category[randNum6]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer6: task6,
      });
      setOnePlayerSix(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum7 = Math.floor(Math.random() * category.length);
      let newTask7 = task7.push(category[randNum7]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer7: task7,
      });
      setOnePlayerSeven(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum8 = Math.floor(Math.random() * category.length);
      let newTask8 = task8.push(category[randNum8]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer8: task8,
      });
      setOnePlayerEight(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum9 = Math.floor(Math.random() * category.length);
      let newTask9 = task9.push(category[randNum9]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer9: task9,
      });
      setOnePlayerNine(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum10 = Math.floor(Math.random() * category.length);
      let newTask10 = task10.push(category[randNum10]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer10: task10,
      });
      setOnePlayerTen(category);
    }
  }, []);
  const setOnePlayerTwo = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task2.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer2: task2,
      });
      setTwoPlayerTwo(categoryParam);
    }, newNum);
  };
  const setTwoPlayerTwo = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task2.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer2: task2,
      });
      setOnePlayerTwo(categoryParam);
    }, newNum);
  };
  const setOnePlayerOne = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        task: task,
      });
      setTwoPlayerOne(categoryParam);
    }, newNum);
  };
  const setTwoPlayerOne = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        task: task,
      });
      setOnePlayerOne(categoryParam);
    }, newNum);
  };
  const setOnePlayerThree = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task3.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer3: task3,
      });
      setTwoPlayerThree(categoryParam);
    }, newNum);
  };
  const setTwoPlayerThree = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task3.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer3: task3,
      });
      setOnePlayerThree(categoryParam);
    }, newNum);
  };
  const setOnePlayerFour = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task4.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer4: task4,
      });
      setTwoPlayerFour(categoryParam);
    }, newNum);
  };
  const setTwoPlayerFour = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task4.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer4: task4,
      });
      setOnePlayerFour(categoryParam);
    }, newNum);
  };
  const setOnePlayerSix = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task6.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer6: task6,
      });
      setTwoPlayerSix(categoryParam);
    }, newNum);
  };
  const setTwoPlayerSix = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task6.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer6: task6,
      });
      setOnePlayerSix(categoryParam);
    }, newNum);
  };
  const setOnePlayerFive = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task5.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer5: task5,
      });
      setTwoPlayerFive(categoryParam);
    }, newNum);
  };
  const setTwoPlayerFive = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task5.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer5: task5,
      });
      setOnePlayerFive(categoryParam);
    }, newNum);
  };
  const setOnePlayerSeven = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task7.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer7: task7,
      });
      setTwoPlayerSeven(categoryParam);
    }, newNum);
  };
  const setTwoPlayerSeven = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task7.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer7: task7,
      });
      setOnePlayerSeven(categoryParam);
    }, newNum);
  };
  const setOnePlayerEight = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task8.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer8: task8,
      });
      setTwoPlayerEight(categoryParam);
    }, newNum);
  };
  const setTwoPlayerEight = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task8.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer8: task8,
      });
      setOnePlayerEight(categoryParam);
    }, newNum);
  };
  const setOnePlayerNine = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task9.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer9: task9,
      });
      setTwoPlayerNine(categoryParam);
    }, newNum);
  };
  const setTwoPlayerNine = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task9.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer9: task9,
      });
      setOnePlayerNine(categoryParam);
    }, newNum);
  };
  const setOnePlayerTen = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task10.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer10: task10,
      });
      setTwoPlayerNine(categoryParam);
    }, newNum);
  };
  const setTwoPlayerTen = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      let randNum2 = Math.floor(Math.random() * categoryParam.length);
      let newTask2 = task10.push(categoryParam[randNum2]);
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer10: task10,
      });
      setOnePlayerNine(categoryParam);
    }, newNum);
  };

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
