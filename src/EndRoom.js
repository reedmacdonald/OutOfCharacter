import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { getDoc, getSnapshot, updateRoom } from "./Functions";
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
  const [showModal, setShowModal] = React.useState(false);
  const [unveil, setUnveil] = React.useState(0);
  const [insanityLevel, setInsanityLevel] = React.useState(1);
  React.useEffect(() => {
    getDoc(props.match.params.roomNumber.toString(), (results) => {
      setPrompts(results.task);
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
    });
  }, []);
  console.log(unveil, "<---unveil");
  console.log(props.match.params.numberPlayers, "<----numberPlayers");
  return (
    <>
      <div>
        <h1>The game has ended, but that was fun! </h1>
      </div>
      <h2>Here were your prompts:</h2>
      {props.match.params.numberPlayers > 0 && unveil > 0 && (
        <>
          <h1>Player 1:</h1>
          {prompts.map((value, index) => {
            console.log(value, "<---value");
            return (
              <div>
                {index !== 0 &&
                value.word !==
                  "Just be yourself. That's good enough for me :)" ? (
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
                {index !== 0 &&
                value.word !==
                  "Just be yourself. That's good enough for me :)" ? (
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
                {index !== 0 &&
                value.word !==
                  "Just be yourself. That's good enough for me :)" ? (
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
                {index !== 0 &&
                value.word !==
                  "Just be yourself. That's good enough for me :)" ? (
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
                {index !== 0 &&
                value.word !==
                  "Just be yourself. That's good enough for me :)" ? (
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
                {index !== 0 &&
                value.word !==
                  "Just be yourself. That's good enough for me :)" ? (
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
                {index !== 0 &&
                value.word !==
                  "Just be yourself. That's good enough for me :)" ? (
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
                {index !== 0 &&
                value.word !==
                  "Just be yourself. That's good enough for me :)" ? (
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
                {index !== 0 &&
                value.word !==
                  "Just be yourself. That's good enough for me :)" ? (
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
                {index !== 0 &&
                value.word !==
                  "Just be yourself. That's good enough for me :)" ? (
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
      {unveil !== props.match.params.numberPlayers && (
        <button
          onClick={() => {
            updateRoom(props.match.params.roomNumber.toString(), {
              unveil: unveil + 1,
            });
          }}
        >
          See next person
        </button>
      )}
      {props.match.params.numberPlayers == unveil && (
        <>
          {props.match.params.playerNumber == 1 && <button>End Game</button>}
          {props.match.params.playerNumber == 1 && (
            <button
              onClick={() => {
                setShowModal(true);
              }}
            >
              New Game
            </button>
          )}
        </>
      )}
      {showModal && (
        <div
          style={{
            position: "absolute",
            width: "90%",
            height: "90%",
            backgroundColor: "red",
            top: 0,
          }}
        >
          <h1>Game Type:</h1>{" "}
          <select onChange={(e) => setInsanityLevel(e.target.value)}>
            <option value={1}>Absurdity Level 1</option>
            <option value={2}>Absurdity Level 2</option>
            <option value={3}>Absurdity Level 3</option>
            <option value={"characterBased"}>Character Based</option>
            <option value={"politics"}>Politics</option>
          </select>
          <button onClick={() => {}}>Start</button>
        </div>
      )}
    </>
  );
};

export default withRouter(EndRoom);
