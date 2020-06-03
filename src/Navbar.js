import React from "react";
import Firebase from "./Firebase";
import "./App.css";
import { GameContext } from "./GameContext";
import { sayHi } from "./Functions";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

const Navbar = () => {
  const [showInstructions, setShowInstructions] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState(false);
  return (
    <div className="navbar">
      {showInstructions && (
        <div
          id="navbarModal"
          style={{}}
          onClick={() => {
            setShowInstructions(!showInstructions);
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
              setShowInstructions(!showInstructions);
            }}
          >
            (Click this to close)
          </span>
        </div>
      )}
      {showAbout && (
        <div
          id="navbarModal"
          style={{}}
          onClick={() => {
            setShowAbout(!showAbout);
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
              setShowAbout(!showAbout);
            }}
          >
            (Click this to close)
          </span>
        </div>
      )}
      <div>
        <span
          onClick={() => {
            setShowInstructions(!showInstructions);
          }}
        >
          Instructions
        </span>
        <span>
          {" "}
          <a
            href="https://www.youtube.com/watch?v=gFdyNPL5z3w"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Watch Demo
          </a>
        </span>
        <span
          onClick={() => {
            setShowAbout(!showAbout);
          }}
        >
          About
        </span>
      </div>
    </div>
  );
};
export default withRouter(Navbar);
