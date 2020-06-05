import React from "react";
import Firebase, { auth } from "./Firebase";
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
  const [showInstructions, setShowInstructions] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);
  React.useEffect(() => {
    document.body.style = "background: #210f63;";
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
  }, []);
  return (
    <>
      {showInstructions && (
        <div
          style={{
            position: "absolute",
            width: "35%",
            height: "35%",
            backgroundColor: "white",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "5px solid black",

            overflow: "scroll",
            padding: "15px",
            zIndex: "1000000000",
          }}
          onClick={() => {
            setShowInstructions(false);
          }}
        >
          <h3>
            The goal of this web-app is to create lively conversation on video
            chats by giving the participants "prompts" which contain things to
            do during them. When a user wants to set up a game, they are given
            links to send to the other people video-chatting with them. These
            links will be lead them to a page that contains a prompt that
            rotates every minute or so. In Absurdity Levels 1 & 2, the "prompts"
            are pretty mild so you could probably play this in most settings
            without anyone noticing anything weird. Absurdity Level 3 and other
            game types get pretty wild and are recommended to be played in
            settings where everyone is playing.
          </h3>
          <h3>
            Prompts will rotate randomly every minute to a minute and a half.
            You can click "pass" to get a new prompt, though you only get two of
            these per conversation. If you've completed your task, you can click
            the check box so that it will be recorded and shown at the end. When
            you have checked the box, this will not make the next prompt come
            any faster. This is to keep the conversation from getting too zany,
            too quickly.
          </h3>
          <h3>
            The game is over when Player One chooses to end it. Player one is
            the player who started the game and sent everyone the links. They
            are the only one who sees the button to end it. Though it is not
            required, it is recommended that games be ended on a good note.
          </h3>
          <h3>
            After the game is ended, everyone should see a new screen. Click
            "See next player", to see what prompts each player got and whether
            they accomplished them. Every player's "Player number" is in the URL
            next to the topic, after the second-to-last dash. It is also the
            order in which you sent the links. Player 1 can then either start a
            new game (Screens should automatically refresh in this case, no need
            to send new links) or end the game.
          </h3>
          <h3>Have fun and watch the demo if you have any questions</h3>
          <span
            className="clickThis"
            onClick={() => {
              setShowInstructions(false);
            }}
          >
            (Click this to close)
          </span>
        </div>
      )}
      {showAbout && (
        <div
          style={{
            position: "absolute",
            width: "35%",
            height: "35%",
            backgroundColor: "white",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "5px solid black",

            overflow: "scroll",
            padding: "15px",
            zIndex: "1000000000",
          }}
          onClick={() => {
            setShowAbout(false);
          }}
        >
          <h3>
            This app was created with React and Firebase and deployed with
            Netlify
          </h3>
          <h3>
            The app was coded by Reed MacDonald (myself) and the prompts were
            written by me and my cousin. I am not currently looking for a job
            but you can email me about any inquiries regarding the game at
            reedpmacdonald@gmail.com.
          </h3>
          <span
            className="clickThis"
            onClick={() => {
              setShowAbout(false);
            }}
          >
            (Click this to close)
          </span>
        </div>
      )}
      <div className="App">
        <h1 id="title" className="titleMarginTop">
          Out of Character
        </h1>
        <h2 className="subTitle" id="subtitleMarginTop">
          Giving Video-Call Conversations a Kick
        </h2>
        <div id="firstPageHolder">
          <div id="thing1">
            <span>How many people? (2-10)</span>
            <br />
            <input
              onChange={(e) => {
                setNumPeople(e.target.value);
              }}
              type="number"
              min="2"
              max="10"
            ></input>
          </div>
          <div id="thing2">
            <span>Game Type:</span>
            <br />
            <select
              id="otherSelect"
              onChange={(e) => setInsanityLevel(e.target.value)}
            >
              <option value={1}>Absurdity Level 1</option>
              <option value={2}>Absurdity Level 2</option>
              <option value={3}>Absurdity Level 3</option>
              <option value={"characterBased"}>Character Based</option>
              <option value={"politics"}>Politics</option>
              <option value={"date"}>First Date Icebreaker</option>
              <option value={"family"}>Family Reunion</option>
              {currentUser && (
                <>
                  {/*<option value={"officeBanter"}>Office Banter</option>
                  <option value={"personal"}>Deeply Personal</option>
                  <option value={"ocean"}>Ocean, Fish, Etc</option>*/}
                  <option value={"greece"}>Greek Mythology</option>
                </>
              )}
            </select>
          </div>
        </div>
        <button
          className="firstPageButton"
          onClick={() => {
            let randThing = Math.floor(Math.random() * 11);
            createRoom(gameContext.roomNumber.toString(), {
              numPeople,
              rotationSpeed,
              insanityLevel,
              randThing,
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
              turnNumber: 1,
              gameOver: false,
              unveil: 0,
              topic: "Calibrating",
              endGame: false,
            });
            //sessionStorage.setItem("yourRoom", gameContext.roomNumber);
            props.history.push(
              `/waitingroom/${gameContext.roomNumber}/${insanityLevel}`
            );
          }}
        >
          Start Game
        </button>
      </div>
    </>
  );
}

export default withRouter(FirstRoom);
