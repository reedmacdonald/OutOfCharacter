import React from "react";
import "./App.css";
import Firebase from "./Firebase";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import FirstRoom from "./FirstRoom";
import SecondRoom from "./SecondRoom";
import * as routes from "./routes";
import { GameContext } from "./GameContext";
import { getSnapshot } from "./Functions";
import WaitingRoom from "./WaitingRoom";
import GameRoom from "./GameRoom";
import EndRoom from "./EndRoom";
import HomeScreen from "./HomeScreen";
import Navbar from "./Navbar";
import IntroRoom from "./Intro";
function App() {
  const [roomNumber, setRoomNumber] = React.useState(0);
  const [numPeople, setNumPeople] = React.useState(0);
  const [insanityLevel, setInsanityLevel] = React.useState(2);
  const [rotationSpeed, setRotationSpeed] = React.useState("slow");
  React.useEffect(() => {
    let room = sessionStorage.getItem("yourRoom");
    let randNum = Math.floor(Math.random() * 10000000);

    setRoomNumber(room || randNum);
    sessionStorage.setItem("roomNumber", randNum);
    let myNumber = sessionStorage.getItem("myNumber");
    let stringRoom;
    if (room) {
      stringRoom = room.toString();
    } else {
      stringRoom = undefined;
    }
    const data = getSnapshot(stringRoom || randNum.toString(), (results) => {
      setNumPeople(results.numPeople);
      setInsanityLevel(results.insanityLevel);
      setRotationSpeed(results.rotationSpeed);
    });
  }, []);

  return (
    <GameContext.Provider
      value={{ roomNumber, numPeople, insanityLevel, rotationSpeed }}
    >
      {" "}
      <Navbar></Navbar>
      <Switch>
        <Route
          exact
          path={`${routes.HOME}/:typeOfGame?`}
          render={() => <FirstRoom />}
        />
        <Route exact path={`${routes.ROOM}/`} render={() => <SecondRoom />} />
        <Route
          exact
          path={`${routes.WAIT}/:roomNumber/:gameType`}
          render={() => <WaitingRoom />}
        />
        <Route
          exact
          path={`${routes.GAMEROOM}/:roomNumber/:playerNumber/:gameType`}
          render={() => <GameRoom />}
        />
        <Route
          exact
          path={`${routes.ENDROOM}/:roomNumber/:numberPlayers/:playerNumber`}
          render={() => <EndRoom />}
        />
        <Route
          exact
          path={`${routes.INTRO}/:roomType?`}
          render={() => <IntroRoom />}
        />
        <Route exact path={routes.HOMESCREEN} render={() => <HomeScreen />} />
      </Switch>
    </GameContext.Provider>
  );
}

export default App;
