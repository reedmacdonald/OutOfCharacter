import React from "react";
import Firebase from "./Firebase";
const db = Firebase.firestore();
export const sayHi = (person) => {
  console.log("Hello " + person);
};

export const createRoom = (room, info) => {
  db.collection("word").doc(room).set(info);
};
export const updateRoom = (room, info) => {
  db.collection("word").doc(room).update(info);
};
export const getSnapshot = (room, callback) => {
  db.collection("word")
    .doc(room)
    .onSnapshot(function (doc) {
      console.log("Current data: ", doc.data());
      doc.data() && callback(doc.data());
      return doc.data();
    });
};

export const getDoc = (room, callback) => {
  db.collection("word")
    .doc(room)
    .get()
    .then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
        callback(doc.data());
        return doc.data();
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
    .catch(function (error) {
      console.log("Error getting document:", error);
    });
};
