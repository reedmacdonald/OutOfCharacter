import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { getDoc, getSnapshot, updateRoom, deleteDoc } from "./Functions";
import Firebase, { auth, analytics } from "./Firebase";
import "./App.css";

const EndRoom = (props) => {
  const [prompts, setPrompts] = React.useState(["some", "prompts"]);
  const [prompts2, setPrompts2] = React.useState(["some", "prompts"]);
  const [prompts3, setPrompts3] = React.useState(["some", "prompts"]);
  const [prompts4, setPrompts4] = React.useState(["some", "prompts"]);
  const [prompts5, setPrompts5] = React.useState(["some", "prompts"]);
  const [prompts6, setPrompts6] = React.useState(["some", "prompts"]);
  const [prompts7, setPrompts7] = React.useState(["some", "prompts"]);
  const [prompts8, setPrompts8] = React.useState(["some", "prompts"]);
  const [prompts9, setPrompts9] = React.useState(["some", "prompts"]);
  const [prompts10, setPrompts10] = React.useState(["some", "prompts"]);
  const [prompts11, setPrompts11] = React.useState(["some", "prompts"]);
  const [prompts12, setPrompts12] = React.useState(["some", "prompts"]);
  const [showModal, setShowModal] = React.useState(false);
  const [unveil, setUnveil] = React.useState(0);
  const [insanityLevel, setInsanityLevel] = React.useState(1);
  const [currentUser, setCurrentUser] = React.useState(null);
  React.useEffect(() => {
    var id = window.setTimeout(function () {}, 0);
    while (id--) {
      window.clearTimeout(id); // will do nothing if no timeout with id is present
    }
    auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log(user.email, "<---user");
        setCurrentUser(user.email);
        //setShowLogin(false);
      } else {
        // No user is signed in.
        console.log("No user SignedIn");
        setCurrentUser(null);
      }
    });
    document.body.style = "background: #210f63;";
    getDoc(props.match.params.roomNumber.toString(), (results) => {
      setPrompts(results.taskPlayer1);
      setPrompts2(results.taskPlayer2);
      setPrompts3(results.taskPlayer3);
      setPrompts4(results.taskPlayer4);
      setPrompts5(results.taskPlayer5);
      setPrompts6(results.taskPlayer6);
      setPrompts7(results.taskPlayer7);
      setPrompts8(results.taskPlayer8);
      setPrompts9(results.taskPlayer9);
      setPrompts10(results.taskPlayer);
    });
    getSnapshot(props.match.params.roomNumber.toString(), (results) => {
      setUnveil(results.unveil);
      if (results.gameOver == false) {
        props.history.push(
          `/gameroom/${props.match.params.roomNumber}/${props.match.params.playerNumber}/${results.insanityLevel}`
        );
      }
      if (results.endGame == true) {
        props.history.push(`/room`);
        setTimeout(() => {
          deleteDoc(props.match.params.roomNumber.toString());
        }, 3000);
      }
    });
  }, []);

  return (
    <>
      <div className="endScreen">
        <h1 id="title">Out of Character</h1>
        <h1>The game has ended, but that was fun! </h1>

        <h2>Here were your prompts:</h2>
        {props.match.params.numberPlayers > 0 && unveil > 0 && (
          <>
            <h1>Player 1:</h1>
            {prompts.map((value, index) => {
              return (
                <div>
                  {index !== 0 && value.word !== "Just be yourself :)" ? (
                    <>
                      <h2
                        style={{
                          textDecoration: value.completed
                            ? "line-through"
                            : undefined,
                        }}
                      >
                        {value.word}
                      </h2>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </>
        )}
        {props.match.params.numberPlayers > 1 && unveil > 1 && (
          <>
            <h1>Player 2:</h1>
            {prompts2.map((value, index) => {
              return (
                <div>
                  {index !== 0 && value.word !== "Just be yourself :)" ? (
                    <>
                      <h2
                        style={{
                          textDecoration: value.completed
                            ? "line-through"
                            : undefined,
                        }}
                      >
                        {value.word}
                      </h2>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </>
        )}
        {props.match.params.numberPlayers > 2 && unveil > 2 && (
          <>
            <h1>Player 3:</h1>
            {prompts3.map((value, index) => {
              return (
                <div>
                  {index !== 0 && value.word !== "Just be yourself :)" ? (
                    <>
                      <h2
                        style={{
                          textDecoration: value.completed
                            ? "line-through"
                            : undefined,
                        }}
                      >
                        {value.word}
                      </h2>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </>
        )}
        {props.match.params.numberPlayers > 3 && unveil > 3 && (
          <>
            <h1>Player 4:</h1>
            {prompts4.map((value, index) => {
              return (
                <div>
                  {index !== 0 && value.word !== "Just be yourself :)" ? (
                    <>
                      <h2
                        style={{
                          textDecoration: value.completed
                            ? "line-through"
                            : undefined,
                        }}
                      >
                        {value.word}
                      </h2>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </>
        )}
        {props.match.params.numberPlayers > 4 && unveil > 4 && (
          <>
            <h1>Player 5:</h1>
            {prompts5.map((value, index) => {
              return (
                <div>
                  {index !== 0 && value.word !== "Just be yourself :)" ? (
                    <>
                      <h2
                        style={{
                          textDecoration: value.completed
                            ? "line-through"
                            : undefined,
                        }}
                      >
                        {value.word}
                      </h2>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </>
        )}
        {props.match.params.numberPlayers > 5 && unveil > 5 && (
          <>
            <h1>Player 6:</h1>
            {prompts6.map((value, index) => {
              return (
                <div>
                  {index !== 0 && value.word !== "Just be yourself :)" ? (
                    <>
                      <h2
                        style={{
                          textDecoration: value.completed
                            ? "line-through"
                            : undefined,
                        }}
                      >
                        {value.word}
                      </h2>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </>
        )}
        {props.match.params.numberPlayers > 6 && unveil > 6 && (
          <>
            <h1>Player 7:</h1>
            {prompts7.map((value, index) => {
              return (
                <div>
                  {index !== 0 && value.word !== "Just be yourself :)" ? (
                    <>
                      <h2
                        style={{
                          textDecoration: value.completed
                            ? "line-through"
                            : undefined,
                        }}
                      >
                        {value.word}
                      </h2>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </>
        )}
        {props.match.params.numberPlayers > 7 && unveil > 7 && (
          <>
            <h1>Player 8:</h1>
            {prompts8.map((value, index) => {
              return (
                <div>
                  {index !== 0 && value.word !== "Just be yourself :)" ? (
                    <>
                      <h2
                        style={{
                          textDecoration: value.completed
                            ? "line-through"
                            : undefined,
                        }}
                      >
                        {value.word}
                      </h2>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </>
        )}
        {props.match.params.numberPlayers > 8 && unveil > 8 && (
          <>
            <h1>Player 9:</h1>
            {prompts9.map((value, index) => {
              return (
                <div>
                  {index !== 0 && value.word !== "Just be yourself :)" ? (
                    <>
                      <h2
                        style={{
                          textDecoration: value.completed
                            ? "line-through"
                            : undefined,
                        }}
                      >
                        {value.word}
                      </h2>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </>
        )}
        {props.match.params.numberPlayers > 9 && unveil > 9 && (
          <>
            <h1>Player 10:</h1>
            {prompts10.map((value, index) => {
              return (
                <div>
                  {index !== 0 && value.word !== "Just be yourself :)" ? (
                    <>
                      <h2
                        style={{
                          textDecoration: value.completed
                            ? "line-through"
                            : undefined,
                        }}
                      >
                        {value.word}
                      </h2>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </>
        )}
        {props.match.params.numberPlayers > 10 && unveil > 10 && (
          <>
            <h1>Player 11:</h1>
            {prompts11.map((value, index) => {
              return (
                <div>
                  {index !== 0 && value.word !== "Just be yourself :)" ? (
                    <>
                      <h2
                        style={{
                          textDecoration: value.completed
                            ? "line-through"
                            : undefined,
                        }}
                      >
                        {value.word}
                      </h2>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </>
        )}
        {props.match.params.numberPlayers > 11 && unveil > 11 && (
          <>
            <h1>Player 12:</h1>
            {prompts12.map((value, index) => {
              return (
                <div>
                  {index !== 0 && value.word !== "Just be yourself :)" ? (
                    <>
                      <h2
                        style={{
                          textDecoration: value.completed
                            ? "line-through"
                            : undefined,
                        }}
                      >
                        {value.word}
                      </h2>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </>
        )}
        {unveil !== Number(props.match.params.numberPlayers) && (
          <button
            onClick={() => {
              updateRoom(props.match.params.roomNumber.toString(), {
                unveil: unveil + 1,
              });
            }}
            className="seeThrough"
          >
            See next person
          </button>
        )}
        {props.match.params.numberPlayers <= unveil && (
          <>
            {props.match.params.playerNumber == 1 && (
              <button
                className="buttonOne"
                onClick={() => {
                  analytics.logEvent("Ended Game", { who: "idk" });
                  updateRoom(props.match.params.roomNumber.toString(), {
                    endGame: true,
                  });
                }}
              >
                End Game
              </button>
            )}
            {props.match.params.playerNumber == 1 && (
              <button
                className="yellowButton"
                onClick={() => {
                  setShowModal(true);
                }}
                id="buttonEndScreen"
              >
                New Game
              </button>
            )}
          </>
        )}
        {showModal && (
          <div id="endroomModal">
            <h1>Game Type:</h1>{" "}
            <div>
              <select
                style={{ outline: "none" }}
                onChange={(e) => setInsanityLevel(e.target.value)}
              >
                {/*<option value={1}>Absurdity Level 1</option>
                <option value={2}>Absurdity Level 2</option>*/}
                <option value={"officeBanter"}>Team Building</option>
                <option value={3}>Absurd</option>
                <option value={"politics"}>Politics</option>
                <option value={"date"}>First Date Icebreaker</option>

                {currentUser && (
                  <>
                    {/*<option value={"officeBanter"}>Office Banter</option>
                  <option value={"personal"}>Deeply Personal</option>
                  <option value={"ocean"}>Ocean, Fish, Etc</option>*/}
                    <option value={"characterBased"}>Character Based</option>
                    <option value={"family"}>Family Reunion</option>
                    <option value={"greece"}>Greek Mythology</option>
                  </>
                )}
              </select>
            </div>
            <br />
            <br />
            <button
              className="buttonOne"
              onClick={() => {
                analytics.logEvent("Finished Game Started a New One", {
                  who: "idk",
                });
                updateRoom(props.match.params.roomNumber.toString(), {
                  numPeople: props.match.params.numberPlayers,
                  rotationSpeed: "slow",
                  insanityLevel,
                  randThing: 5,
                  player1Passes: 2,
                  player2Passes: 2,
                  player3Passes: 2,
                  player4Passes: 2,
                  player5Passes: 2,
                  player6Passes: 2,
                  player7Passes: 2,
                  player8Passes: 2,
                  player9Passes: 2,
                  player10Passes: 2,
                  player11Passes: 2,
                  player12Passes: 2,
                  taskPlayer1: ["Make some small-talk to get things going"],
                  taskPlayer2: ["Make some small-talk to get things going"],
                  taskPlayer3: ["Make some small-talk to get things going"],
                  taskPlayer4: ["Make some small-talk to get things going"],
                  taskPlayer5: ["Make some small-talk to get things going"],
                  taskPlayer6: ["Make some small-talk to get things going"],
                  taskPlayer7: ["Make some small-talk to get things going"],
                  taskPlayer8: ["Make some small-talk to get things going"],
                  taskPlayer9: ["Make some small-talk to get things going"],
                  taskPlayer10: ["Make some small-talk to get things going"],
                  taskPlayer11: ["Make some small-talk to get things going"],
                  taskPlayer12: ["Make some small-talk to get things going"],
                  turnNumber: 1,
                  gameOver: false,
                  unveil: 0,
                  topic: "Calibrating",
                  endGame: false,
                });
              }}
            >
              Start
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default withRouter(EndRoom);
