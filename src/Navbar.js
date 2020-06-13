import React from "react";
import Firebase, { auth, analytics } from "./Firebase";
import "./App.css";
import { GameContext } from "./GameContext";
import { sayHi, SignUp } from "./Functions";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

const Navbar = (props) => {
  const [showInstructions, setShowInstructions] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState(false);
  const [showSignIn, setShowSignIn] = React.useState(false);
  const [password, setPasssword] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState(null);
  const [showLogin, setShowLogin] = React.useState(false);
  const [errorSignIn, setErrorSignIn] = React.useState("");
  const [otherError, setOtherError] = React.useState("");
  React.useState(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log(user.email, "<---user");
        setCurrentUser(user.email);
        setShowLogin(false);
      } else {
        // No user is signed in.
        console.log("No user SignedIn");
        setCurrentUser(null);
      }
    });
  }, []);
  return (
    <div className="navbar">
      {showLogin && (
        <div id="navbarModal">
          {!showSignIn && (
            <>
              <h3>Email</h3>
              <div style={{ textAlign: "center" }}>
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                ></input>
              </div>
              <h2>Password</h2>
              <div style={{ textAlign: "center" }}>
                <input
                  onChange={(e) => {
                    setPasssword(e.target.value);
                  }}
                  type="password"
                ></input>
              </div>
              <br />

              <div style={{ textAlign: "center" }}>
                <button
                  className="buttonOne"
                  onClick={() => {
                    auth
                      .signInWithEmailAndPassword(username, password)
                      .then((user) => {
                        console.log(user, "<------user");
                        analytics.logEvent("Signed In", { who: "idk" });
                      })
                      .catch((err) => {
                        console.log(err, "<---err");
                        setOtherError(err.message);
                      });
                  }}
                >
                  Submit
                </button>
                <p>{otherError}</p>

                <h5>Don't have an account?</h5>
              </div>
            </>
          )}
          {showSignIn && (
            <>
              <h3>Email</h3>

              <div style={{ textAlign: "center" }}>
                <input
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                ></input>
              </div>
              <h2>Password</h2>
              <div style={{ textAlign: "center" }}>
                <input
                  onChange={(e) => {
                    setPasssword(e.target.value);
                  }}
                  type="password"
                ></input>
              </div>
              <br />
              <div style={{ textAlign: "center" }}>
                <button
                  className="buttonOne"
                  onClick={() => {
                    SignUp(
                      username,
                      password,
                      () => {
                        console.log("hi1");
                        analytics.logEvent("Signed Up", { who: "idk" });
                      },
                      (sumthin) => {
                        setErrorSignIn(sumthin.message);
                      }
                    );
                  }}
                >
                  Submit
                </button>
              </div>
              <p>{errorSignIn}</p>
              <br />
            </>
          )}

          <div style={{ textAlign: "center" }}>
            <button
              className="seeThrough"
              onClick={() => setShowSignIn(!showSignIn)}
            >
              {showSignIn ? "Back to Login" : "Sign Up"}
            </button>
          </div>
        </div>
      )}
      {showInstructions && (
        <div
          id="navbarModal"
          onClick={() => {
            setShowInstructions(!showInstructions);
            analytics.logEvent("Clicked Show Instructions from NavBar", {
              who: "idk",
            });
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
            analytics.logEvent("Clicked Show Aboiut from Navbar", {
              who: "idk",
            });
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
        {currentUser && (
          <span
            onClick={() => {
              auth
                .signOut()
                .then((idk) => {
                  console.log(idk, "<---idk");
                  analytics.logEvent("Logged Out", { who: "idk" });
                })
                .catch((err) => {
                  console.log(err, "<---err");
                });
            }}
          >
            Sign Out
          </span>
        )}
        {!currentUser && (
          <span
            onClick={() => {
              setShowLogin(!showLogin);
            }}
          >
            Log In
          </span>
        )}
        <span
          onClick={() => {
            analytics.logEvent("Clicked Show Instructions", { who: "idk" });
            setShowInstructions(!showInstructions);
          }}
        >
          Instructions
        </span>
        <span
          id="homeNavBar"
          onClick={() => {
            props.history.push("/");
          }}
        >
          Home
        </span>
        <span
          onClick={() => {
            analytics.logEvent("Clicked YouTube Demo from NavBar", {
              who: "idk",
            });
          }}
        >
          {" "}
          <a
            href="https://www.youtube.com/watch?v=nhNJlGzTHEQ"
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
