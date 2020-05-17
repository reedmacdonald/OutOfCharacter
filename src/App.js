import React from "react";
import logo from "./logo.svg";
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
function App() {
  const [roomNumber, setRoomNumber] = React.useState(0);
  const [numPeople, setNumPeople] = React.useState(0);
  const [insanityLevel, setInsanityLevel] = React.useState(2);
  const [rotationSpeed, setRotationSpeed] = React.useState("slow");
  React.useEffect(() => {
    let room = sessionStorage.getItem("yourRoom");
    console.log(room, "<------room");
    let randNum = Math.floor(Math.random() * 100000);

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
      <Switch>
        <Route exact path={routes.HOME} render={() => <FirstRoom />} />
        <Route
          exact
          path={`${routes.ROOM}/:roomNumber`}
          render={() => <SecondRoom />}
        />
        <Route
          exact
          path={`${routes.WAIT}/:roomNumber`}
          render={() => <WaitingRoom />}
        />
        <Route
          exact
          path={`${routes.GAMEROOM}/:roomNumber/:playerNumber`}
          render={() => <GameRoom />}
        />
      </Switch>
    </GameContext.Provider>
  );
}

export default App;
