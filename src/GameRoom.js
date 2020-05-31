import React from "react";
import "./App.css";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { getSnapshot, updateRoom, getDoc } from "./Functions";
import {
  level1,
  level2,
  level3,
  Politics,
  Character,
  Dates,
  Family,
  Personal,
  Office,
} from "./Tasks";
import { Topics } from "./Topics";

const GameRoom = (props) => {
  const [task1, setTask1] = React.useState([
    { word: "Loading...", completed: false },
  ]);
  const [task2, setTask2] = React.useState([
    { word: "Loading...", completed: false },
  ]);
  const [task3, setTask3] = React.useState([
    { word: "Loading...", completed: false },
  ]);
  const [task4, setTask4] = React.useState([
    { word: "Loading...", completed: false },
  ]);
  const [task5, setTask5] = React.useState([
    { word: "Loading...", completed: false },
  ]);
  const [task6, setTask6] = React.useState([
    { word: "Loading...", completed: false },
  ]);
  const [task7, setTask7] = React.useState([
    { word: "Loading...", completed: false },
  ]);
  const [task8, setTask8] = React.useState([
    { word: "Loading...", completed: false },
  ]);
  const [task9, setTask9] = React.useState([
    { word: "Loading...", completed: false },
  ]);
  const [task10, setTask10] = React.useState([
    { word: "Loading...", completed: false },
  ]);
  const [player1Passes, setPlayer1Passes] = React.useState(2);
  const [player2Passes, setPlayer2Passes] = React.useState(2);
  const [player3Passes, setPlayer3Passes] = React.useState(2);
  const [player4Passes, setPlayer4Passes] = React.useState(2);
  const [player5Passes, setPlayer5Passes] = React.useState(2);
  const [player6Passes, setPlayer6Passes] = React.useState(2);
  const [player7Passes, setPlayer7Passes] = React.useState(2);
  const [player8Passes, setPlayer8Passes] = React.useState(2);
  const [player9Passes, setPlayer9Passes] = React.useState(2);
  const [player10Passes, setPlayer10Passes] = React.useState(2);
  const [numPeople, setNumPeople] = React.useState(1);
  const [insanityLevel, setInsanityLevel] = React.useState(["idk"]);
  const [personTurn, setPersonTurn] = React.useState(1);
  const [insanNumber, setInsanNumber] = React.useState(1);
  const [rotationSpeed, setRotationSpeed] = React.useState(10000);
  const [topic, setTopic] = React.useState(["Topic pending"]);
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    getSnapshot(props.match.params.roomNumber, (results) => {
      console.log(results, "<---results");
      setNumPeople(results.numPeople);
      task1 !== results.taskPlayer1 && setTask1(results.taskPlayer1);
      task2 !== results.taskPlayer2 && setTask2(results.taskPlayer2);
      task3 !== results.taskPlayer3 && setTask3(results.taskPlayer3);
      task4 !== results.taskPlayer4 && setTask4(results.taskPlayer4);
      task5 !== results.taskPlayer5 && setTask5(results.taskPlayer5);
      task6 !== results.taskPlayer6 && setTask6(results.taskPlayer6);
      task7 !== results.taskPlayer7 && setTask7(results.taskPlayer7);
      task8 !== results.taskPlayer8 && setTask8(results.taskPlayer8);
      task9 !== results.taskPlayer9 && setTask9(results.taskPlayer9);
      task10 !== results.taskPlayer10 && setTask10(results.taskPlayer10);
      setPlayer1Passes(results.player1Passes);
      setPlayer2Passes(results.player2Passes);
      setPlayer3Passes(results.player3Passes);
      setPlayer4Passes(results.player4Passes);
      setPlayer5Passes(results.player5Passes);
      setPlayer6Passes(results.player6Passes);
      setPlayer7Passes(results.player7Passes);
      setPlayer8Passes(results.player8Passes);
      setPlayer9Passes(results.player9Passes);
      setPlayer10Passes(results.player10Passes);
      setNumPeople(results.numPeople);
      if (results.gameOver == true) {
        props.history.push(
          `/endroom/${props.match.params.roomNumber}/${results.numPeople}/${props.match.params.playerNumber}`
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
    if (props.match.params.gameType == "officeBanter") category = Office;
    if (props.match.params.gameType == "date") category = Dates;
    if (props.match.params.gameType == "family") category = Family;
    if (props.match.params.gameType == "personal") category = Personal;
    setTopic(category);
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum = Math.floor(Math.random() * category.length);
      let newTask = task1.push({ word: category[randNum], completed: false });
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer1: task1,
      });
      setOnePlayerOne(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum2 = Math.floor(Math.random() * category.length);
      let newTask2 = task2.push({ word: category[randNum2], completed: false });
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer2: task2,
      });
      setOnePlayerTwo(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum3 = Math.floor(Math.random() * category.length);
      let newTask3 = task3.push({ word: category[randNum3], completed: false });
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer3: task3,
      });
      setOnePlayerThree(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum4 = Math.floor(Math.random() * category.length);
      let newTask4 = task4.push({ word: category[randNum4], completed: false });
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer4: task4,
      });
      setOnePlayerFour(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum5 = Math.floor(Math.random() * category.length);
      let newTask5 = task5.push({ word: category[randNum5], completed: false });
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer5: task5,
      });
      setOnePlayerFive(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum6 = Math.floor(Math.random() * category.length);
      let newTask6 = task6.push({ word: category[randNum6], completed: false });
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer6: task6,
      });
      setOnePlayerSix(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum7 = Math.floor(Math.random() * category.length);
      let newTask7 = task7.push({ word: category[randNum7], completed: false });
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer7: task7,
      });
      setOnePlayerSeven(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum8 = Math.floor(Math.random() * category.length);
      let newTask8 = task8.push({ word: category[randNum8], completed: false });
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer8: task8,
      });
      setOnePlayerEight(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum9 = Math.floor(Math.random() * category.length);
      let newTask9 = task9.push({ word: category[randNum9], completed: false });
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer9: task9,
      });
      setOnePlayerNine(category);
    }
    if (props.match.params.playerNumber == 1) {
      let newNum = Math.floor(Math.random() * 40000) + 55000;
      let randNum10 = Math.floor(Math.random() * category.length);
      let newTask10 = task10.push({
        word: category[randNum10],
      });
      updateRoom(props.match.params.roomNumber.toString(), {
        taskPlayer10: task10,
      });
      setOnePlayerTen(category);
    }
  }, []);
  const setOnePlayerTwo = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;

    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer2;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        //console.log("here7");
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        var msg = new SpeechSynthesisUtterance(`${categoryParam[randNum2]}`);
        //props.match.params.playerNumber == 1 &&
        // window.speechSynthesis.speak(msg);
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer2: idk,
        });
        setTwoPlayerTwo(categoryParam);
      });
    }, newNum);
  };
  const setTwoPlayerTwo = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer2;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer2: idk,
        });
        setOnePlayerTwo(categoryParam);
      });
    }, newNum);
  };
  const setOnePlayerOne = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer1;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer1: idk,
        });
        setTwoPlayerOne(categoryParam);
      });
    }, newNum);
  };
  const setTwoPlayerOne = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer1;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer1: idk,
        });
        setOnePlayerOne(categoryParam);
      });
    }, newNum);
  };
  const setOnePlayerThree = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer3;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer3: idk,
        });
        setTwoPlayerThree(categoryParam);
      });
    }, newNum);
  };
  const setTwoPlayerThree = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer3;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer3: idk,
        });
        setOnePlayerThree(categoryParam);
      });
    }, newNum);
  };
  const setOnePlayerFour = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer4;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer4: idk,
        });
        setTwoPlayerFour(categoryParam);
      });
    }, newNum);
  };
  const setTwoPlayerFour = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer4;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer4: idk,
        });
        setOnePlayerFour(categoryParam);
      });
    }, newNum);
  };
  const setOnePlayerSix = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer6;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer6: idk,
        });
        setTwoPlayerSix(categoryParam);
      });
    }, newNum);
  };
  const setTwoPlayerSix = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer6;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer6: idk,
        });
        setOnePlayerSix(categoryParam);
      });
    }, newNum);
  };
  const setOnePlayerFive = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer5;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer5: idk,
        });
        setTwoPlayerFive(categoryParam);
      });
    }, newNum);
  };
  const setTwoPlayerFive = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer5;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer5: idk,
        });
        setOnePlayerFive(categoryParam);
      });
    }, newNum);
  };
  const setOnePlayerSeven = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer7;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer7: idk,
        });
        setTwoPlayerSeven(categoryParam);
      });
    }, newNum);
  };
  const setTwoPlayerSeven = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer7;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer7: idk,
        });
        setOnePlayerSeven(categoryParam);
      });
    }, newNum);
  };
  const setOnePlayerEight = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer8;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer8: idk,
        });
        setTwoPlayerEight(categoryParam);
      });
    }, newNum);
  };
  const setTwoPlayerEight = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer8;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer8: idk,
        });
        setOnePlayerEight(categoryParam);
      });
    }, newNum);
  };
  const setOnePlayerNine = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer9;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer9: idk,
        });
        setTwoPlayerNine(categoryParam);
      });
    }, newNum);
  };
  const setTwoPlayerNine = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer9;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer9: idk,
        });
        setOnePlayerNine(categoryParam);
      });
    }, newNum);
  };
  const setOnePlayerTen = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer10;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer10: idk,
        });
        setTwoPlayerTen(categoryParam);
      });
    }, newNum);
  };
  const setTwoPlayerTen = (categoryParam) => {
    let newNum = Math.floor(Math.random() * 40000) + 55000;
    setTimeout(() => {
      getDoc(props.match.params.roomNumber.toString(), (results) => {
        let idk = results.taskPlayer10;
        let randNum2 = Math.floor(Math.random() * categoryParam.length);
        let newTask2 = idk.push({
          word: categoryParam[randNum2],
        });
        updateRoom(props.match.params.roomNumber.toString(), {
          taskPlayer10: idk,
        });
        setOnePlayerTen(categoryParam);
      });
    }, newNum);
  };
  return (
    <>
      {props.match.params.playerNumber == 1 && (
        <>
          <div className="card">
            <h1>{task1[task1.length - 1].word || "error"}</h1>
            {player1Passes > 0 && (
              <div>
                <button
                  onClick={() => {
                    getDoc(
                      props.match.params.roomNumber.toString(),
                      (results) => {
                        console.log("here5");
                        let idk = results.taskPlayer1;
                        let randNum2 = Math.floor(Math.random() * topic.length);
                        let newTask2 = idk.push({
                          word: topic[randNum2],
                        });
                        updateRoom(props.match.params.roomNumber.toString(), {
                          taskPlayer1: idk,
                          player1Passes: player1Passes - 1,
                        });
                      }
                    );
                  }}
                >
                  Pass
                </button>
              </div>
            )}
            <div>
              <p className="completed">Completed?</p>
              <label className="container">
                <input
                  type="checkbox"
                  checked={task1[task1.length - 1].completed}
                  onClick={() => {
                    task1[task1.length - 1].completed = true;
                    updateRoom(props.match.params.roomNumber.toString(), {
                      taskPlayer1: task1,
                    });
                  }}
                ></input>
                <span className="checkmark"></span>
              </label>
            </div>
            <span
              className="whatIsThis"
              onClick={() => {
                setShowModal(true);
              }}
            >
              What is this?
            </span>
          </div>
        </>
      )}
      {props.match.params.playerNumber == 2 && (
        <>
          <div className="card">
            <h1>
              {task2[task2.length - 1].word || "Waiting for Host to Start Game"}
            </h1>
            {player2Passes > 0 && (
              <div>
                <button
                  onClick={() => {
                    getDoc(
                      props.match.params.roomNumber.toString(),
                      (results) => {
                        let idk = results.taskPlayer2;
                        let randNum2 = Math.floor(Math.random() * topic.length);
                        let newTask2 = idk.push({
                          word: topic[randNum2],
                        });
                        updateRoom(props.match.params.roomNumber.toString(), {
                          taskPlayer2: idk,
                          player2Passes: player2Passes - 1,
                        });
                      }
                    );
                  }}
                >
                  Pass
                </button>
              </div>
            )}
            <div>
              <p className="completed">Completed?</p>
              <label className="container">
                <input
                  type="checkbox"
                  checked={task2[task2.length - 1].completed}
                  onClick={() => {
                    task2[task2.length - 1].completed = true;
                    console.log("updating room via click");
                    updateRoom(props.match.params.roomNumber.toString(), {
                      taskPlayer2: task2,
                    });
                  }}
                ></input>
                <span className="checkmark"></span>
              </label>
            </div>
            <span
              className="whatIsThis"
              onClick={() => {
                setShowModal(true);
              }}
            >
              What is this?
            </span>
          </div>
        </>
      )}
      {props.match.params.playerNumber == 3 && (
        <>
          <div className="card">
            <h1>
              {task3[task3.length - 1].word || "Waiting for Host to Start Game"}
            </h1>
            {player3Passes > 0 && (
              <div>
                <button
                  onClick={() => {
                    getDoc(
                      props.match.params.roomNumber.toString(),
                      (results) => {
                        let idk = results.taskPlayer3;
                        let randNum2 = Math.floor(Math.random() * topic.length);
                        let newTask2 = idk.push({
                          word: topic[randNum2],
                        });
                        updateRoom(props.match.params.roomNumber.toString(), {
                          taskPlayer3: idk,
                          player3Passes: player3Passes - 1,
                        });
                      }
                    );
                  }}
                >
                  Pass
                </button>
              </div>
            )}
            <div>
              <p className="completed">Completed?</p>
              <label className="container">
                <input
                  type="checkbox"
                  checked={task3[task3.length - 1].completed}
                  onClick={() => {
                    task3[task3.length - 1].completed = true;
                    updateRoom(props.match.params.roomNumber.toString(), {
                      taskPlayer3: task3,
                    });
                  }}
                ></input>
                <span className="checkmark"></span>
              </label>
            </div>
            <span
              className="whatIsThis"
              onClick={() => {
                setShowModal(true);
              }}
            >
              What is this?
            </span>
          </div>
        </>
      )}
      {props.match.params.playerNumber == 4 && (
        <>
          <div className="card">
            <h1>
              {task4[task4.length - 1].word || "Waiting for Host to Start Game"}
            </h1>
            {player4Passes > 0 && (
              <div>
                <button
                  onClick={() => {
                    getDoc(
                      props.match.params.roomNumber.toString(),
                      (results) => {
                        let idk = results.taskPlayer4;
                        let randNum2 = Math.floor(Math.random() * topic.length);
                        let newTask2 = idk.push({
                          word: topic[randNum2],
                        });
                        updateRoom(props.match.params.roomNumber.toString(), {
                          taskPlayer4: idk,
                          player4Passes: player1Passes - 1,
                        });
                      }
                    );
                  }}
                >
                  Pass
                </button>
              </div>
            )}
            <div>
              <p className="completed">Completed?</p>
              <label className="container">
                <input
                  type="checkbox"
                  checked={task4[task4.length - 1].completed}
                  onClick={() => {
                    task4[task4.length - 1].completed = true;
                    updateRoom(props.match.params.roomNumber.toString(), {
                      taskPlayer4: task4,
                    });
                  }}
                ></input>
                <span className="checkmark"></span>
              </label>
            </div>
            <span
              className="whatIsThis"
              onClick={() => {
                setShowModal(true);
              }}
            >
              What is this?
            </span>
          </div>
        </>
      )}
      {props.match.params.playerNumber == 5 && (
        <>
          <div className="card">
            <h1>
              {task5[task5.length - 1].word || "Waiting for host to start game"}
            </h1>
            {player5Passes > 0 && (
              <div>
                <button
                  onClick={() => {
                    getDoc(
                      props.match.params.roomNumber.toString(),
                      (results) => {
                        let idk = results.taskPlayer5;
                        let randNum2 = Math.floor(Math.random() * topic.length);
                        let newTask2 = idk.push({
                          word: topic[randNum2],
                        });
                        updateRoom(props.match.params.roomNumber.toString(), {
                          taskPlayer5: idk,
                          player5Passes: player5Passes - 1,
                        });
                      }
                    );
                  }}
                >
                  Pass
                </button>
              </div>
            )}
            <div>
              <p className="completed">Completed?</p>
              <label className="container">
                <input
                  type="checkbox"
                  checked={task5[task5.length - 1].completed}
                  onClick={() => {
                    task5[task5.length - 1].completed = true;
                    updateRoom(props.match.params.roomNumber.toString(), {
                      taskPlayer5: task5,
                    });
                  }}
                ></input>
                <span className="checkmark"></span>
              </label>
            </div>
            <span
              className="whatIsThis"
              onClick={() => {
                setShowModal(true);
              }}
            >
              What is this?
            </span>
          </div>
        </>
      )}
      {props.match.params.playerNumber == 6 && (
        <>
          <div className="card">
            <h1>
              {task6[task6.length - 1].word || "Waiting for Host to Start Game"}
            </h1>
            {player6Passes > 0 && (
              <div>
                <button
                  onClick={() => {
                    getDoc(
                      props.match.params.roomNumber.toString(),
                      (results) => {
                        let idk = results.taskPlayer6;
                        let randNum2 = Math.floor(Math.random() * topic.length);
                        let newTask2 = idk.push({
                          word: topic[randNum2],
                        });
                        updateRoom(props.match.params.roomNumber.toString(), {
                          taskPlayer1: idk,
                          player6Passes: player6Passes - 1,
                        });
                      }
                    );
                  }}
                >
                  Pass
                </button>
              </div>
            )}
            <div>
              <p className="completed">Completed?</p>
              <label className="container">
                <input
                  type="checkbox"
                  checked={task6[task6.length - 1].completed}
                  onClick={() => {
                    task6[task6.length - 1].completed = true;
                    updateRoom(props.match.params.roomNumber.toString(), {
                      taskPlayer6: task6,
                    });
                  }}
                ></input>
                <span className="checkmark"></span>
              </label>
            </div>
            <span
              className="whatIsThis"
              onClick={() => {
                setShowModal(true);
              }}
            >
              What is this?
            </span>
          </div>
        </>
      )}
      {props.match.params.playerNumber == 7 && (
        <>
          <div className="card">
            <h1>
              {task7[task7.length - 1].word || "Waiting for Host to Start Game"}
            </h1>
            {player7Passes > 0 && (
              <div>
                <button
                  onClick={() => {
                    getDoc(
                      props.match.params.roomNumber.toString(),
                      (results) => {
                        let idk = results.taskPlayer7;
                        let randNum2 = Math.floor(Math.random() * topic.length);
                        let newTask2 = idk.push({
                          word: topic[randNum2],
                        });
                        updateRoom(props.match.params.roomNumber.toString(), {
                          taskPlayer7: idk,
                          player7Passes: player7Passes - 1,
                        });
                      }
                    );
                  }}
                >
                  Pass
                </button>
              </div>
            )}
            <div>
              <p className="completed">Completed?</p>
              <label className="container">
                <input
                  type="checkbox"
                  checked={task7[task7.length - 1].completed}
                  onClick={() => {
                    task7[task7.length - 1].completed = true;
                    updateRoom(props.match.params.roomNumber.toString(), {
                      taskPlayer7: task7,
                    });
                  }}
                ></input>
                <span className="checkmark"></span>
              </label>
            </div>
            <span
              className="whatIsThis"
              onClick={() => {
                setShowModal(true);
              }}
            >
              What is this?
            </span>
          </div>
        </>
      )}
      {props.match.params.playerNumber == 8 && (
        <>
          <div className="card">
            <h1>
              {task8[task8.length - 1].word || "Waiting for Host to Start Game"}
            </h1>
            {player8Passes > 0 && (
              <div>
                <button
                  onClick={() => {
                    getDoc(
                      props.match.params.roomNumber.toString(),
                      (results) => {
                        let idk = results.taskPlayer8;
                        let randNum2 = Math.floor(Math.random() * topic.length);
                        let newTask2 = idk.push({
                          word: topic[randNum2],
                        });
                        updateRoom(props.match.params.roomNumber.toString(), {
                          taskPlayer8: idk,
                          player8Passes: player8Passes - 1,
                        });
                      }
                    );
                  }}
                >
                  Pass
                </button>
              </div>
            )}
            <div>
              <div>
                <p className="completed">Completed?</p>
                <label className="container">
                  <input
                    type="checkbox"
                    checked={task8[task8.length - 1].completed}
                    onClick={() => {
                      task8[task8.length - 1].completed = true;
                      updateRoom(props.match.params.roomNumber.toString(), {
                        taskPlayer8: task8,
                      });
                    }}
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <span
              className="whatIsThis"
              onClick={() => {
                setShowModal(true);
              }}
            >
              What is this?
            </span>
          </div>
        </>
      )}
      {props.match.params.playerNumber == 9 && (
        <>
          <div className="card">
            <h1>
              {task9[task9.length - 1].word || "Waiting for Host to Start Game"}
            </h1>
            {player9Passes > 0 && (
              <div>
                <button
                  onClick={() => {
                    getDoc(
                      props.match.params.roomNumber.toString(),
                      (results) => {
                        let idk = results.taskPlayer9;
                        let randNum2 = Math.floor(Math.random() * topic.length);
                        let newTask2 = idk.push({
                          word: topic[randNum2],
                        });
                        updateRoom(props.match.params.roomNumber.toString(), {
                          taskPlayer9: idk,
                          player9Passes: player1Passes - 1,
                        });
                      }
                    );
                  }}
                >
                  Pass
                </button>
              </div>
            )}
            <div>
              <p className="completed">Completed?</p>
              <label className="container">
                <input
                  type="checkbox"
                  checked={task9[task9.length - 1].completed}
                  onClick={() => {
                    task9[task9.length - 1].completed = true;
                    updateRoom(props.match.params.roomNumber.toString(), {
                      taskPlayer9: task9,
                    });
                  }}
                ></input>
                <span className="checkmark"></span>
              </label>
            </div>
            <span
              className="whatIsThis"
              onClick={() => {
                setShowModal(true);
              }}
            >
              What is this?
            </span>
          </div>
        </>
      )}
      {props.match.params.playerNumber == 10 && (
        <>
          <div className="card">
            <h1>
              {task10[task10.length - 1].word ||
                "Waiting for Host to Start Game"}
            </h1>
            {player10Passes > 0 && (
              <div>
                <button
                  onClick={() => {
                    getDoc(
                      props.match.params.roomNumber.toString(),
                      (results) => {
                        let idk = results.taskPlayer10;
                        let randNum2 = Math.floor(Math.random() * topic.length);
                        let newTask2 = idk.push({
                          word: topic[randNum2],
                        });
                        updateRoom(props.match.params.roomNumber.toString(), {
                          taskPlayer10: idk,
                          player10Passes: player10Passes - 1,
                        });
                      }
                    );
                  }}
                >
                  Pass
                </button>
              </div>
            )}
            <div>
              <p className="completed">Completed?</p>
              <label className="container">
                <input
                  type="checkbox"
                  checked={task10[task10.length - 1].completed}
                  onClick={() => {
                    task10[task10.length - 1].completed = true;
                    updateRoom(props.match.params.roomNumber.toString(), {
                      taskPlayer10: task10,
                    });
                  }}
                ></input>
                <span className="checkmark"></span>
              </label>
            </div>
            <span
              className="whatIsThis"
              onClick={() => {
                setShowModal(true);
              }}
            >
              What is this?
            </span>
          </div>
        </>
      )}

      {props.match.params.playerNumber == 1 && (
        <button
          className="negative"
          onClick={() => {
            updateRoom(props.match.params.roomNumber.toString(), {
              gameOver: true,
            });
          }}
        >
          End Game
        </button>
      )}
      {showModal && (
        <div
          style={{
            position: "absolute",
            width: "50%",
            //height: "50%",
            backgroundColor: "whiteSmoke",
            position: "fixed",
            top: "50%",
            left: "50%",
            padding: "15px",
            transform: "translate(-50%, -50%)",
            border: "5px solid black",
            borderRadius: "20px",
          }}
          onClick={() => {
            setShowModal(false);
          }}
        >
          <h3>
            Click the checkbox when you have completed the prompt. This doesn't
            really do anything but it'll make it show up as a completed task at
            the end.
          </h3>
          <h3>
            Click "pass" if you don't like your prompt. You only get two of
            these per conversation so use them wisely. Also, the timer doesn't
            restart when you do this, so if you decide you want to pass after
            like, 55 seconds then that's kind of a waste of a pass because then
            the next prompt will only show for like, five seconds.
          </h3>
          <h3>
            The 'Just be yourself' prompt is the 'default' and is supposed to
            help ground the conversation in some normalcy. You should see this
            prompt many times and it won't show up in your list of prompts at
            the end.
          </h3>
          <span className="clickThis">(Click this to close)</span>
        </div>
      )}
    </>
  );
};
export default withRouter(GameRoom);
