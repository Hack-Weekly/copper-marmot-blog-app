import { useState, useEffect } from "react";

import "./App.css";
import { db } from "./firebase";

import { collection, getDocs, addDoc } from "firebase/firestore";

function App() {
  useEffect(() => {
    (async () => {
      try {
        const docRef = await addDoc(collection(db, "posts"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815,
        });
        console.log("Document written with ID: ", docRef.id);

        const querySnapshot = await getDocs(collection(db, "posts"));
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  // useEffect(async () => {}, []);

  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
