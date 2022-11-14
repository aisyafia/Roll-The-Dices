import logo from "./logo.svg";
import "./App.css";
import Dice from "./components/Dice";
import { useState } from "react";

function App() {
  //   const [diceResult, setDiceResult] = useState(1);
  //   setDiceResult(Dice);
  // }

  // const Dice = () => {
  //   const diceToRoll = () => {
  //     return Math.random() * 6;
  //   };

  return (
    <div className="App">
      <h1>Pair-programming: Roll the Dices</h1>
      <Dice />
    </div>
  );
}

export default App;
