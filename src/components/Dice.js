import React, { useState } from "react";

export default function Dice() {
  const initialValue = 0;
  const [rolledValueDice1, setRolledValueDice1] = useState(initialValue);
  const [rolledValueDice2, setRolledValueDice2] = useState(initialValue);
  const [diceOneValue, setDiceOneValue] = useState(initialValue);
  const [diceTwoValue, setDiceTwoValue] = useState(initialValue);

  const diceOne = () => {
    const diceNumberOne = Math.ceil(Math.random() * 5 + 1);
    setRolledValueDice1(diceNumberOne);
    setDiceOneValue(diceOneValue + diceNumberOne);
    console.log(rolledValueDice1);
  };

  const diceTwo = () => {
    const diceNumberTwo = Math.ceil(Math.random() * 5 + 1);
    setRolledValueDice2(diceNumberTwo);
    setDiceTwoValue(diceTwoValue + diceNumberTwo);
    console.log(rolledValueDice2);
  };

  const valueOne = rolledValueDice1;
  const valueTwo = rolledValueDice2;
  //   console.log(valueTwo - valueOne);
  const showMessage = () => {
    if (valueTwo > valueOne) {
      return `Dice 2 has higher score`;
    }
    if (valueOne > valueTwo) {
      return `Dice 1 has higher score`;
    } else {
      return `This round is tied`;
    }
  };

  const resetDices = () => {
    setRolledValueDice1(initialValue);
    setRolledValueDice2(initialValue);
    setDiceOneValue(initialValue);
    setDiceTwoValue(initialValue);
  };

  const winnerMessage = () => {
    if (diceOneValue >= 11 && diceTwoValue < 11) {
      return `CONGRATULATION PLAYER ONE, YOU WIN THIS ROUND`;
    }
    if (diceTwoValue >= 11 && diceOneValue < 11) {
      return `CONGRATULATION PLAYER TWO, YOU WIN THIS ROUND`;
    } else {
      return;
    }
  };
  return (
    <div>
      <button onClick={diceOne}>Roll dice 1</button>
      <p>Dice 1 result: {rolledValueDice1}</p>
      <div>
        <button onClick={diceTwo}>Roll dice 2</button>
        <p>Dice 2 result: {rolledValueDice2}</p>
      </div>
      <p>Compare result: {showMessage()} </p>
      <div>
        <p>
          Added score <strong>Player One</strong>: {diceOneValue}
        </p>
        <p>
          Added score <strong>Player Two</strong>: {diceTwoValue}
        </p>
      </div>
      <h3>{winnerMessage()}</h3>
      <div>
        <p>
          <em>Only click on this button if you want to reset everything: </em>
        </p>
        <button onClick={resetDices}>RESET ALL SCORES</button>
      </div>
    </div>
  );
}
