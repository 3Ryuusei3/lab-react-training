import { useState } from 'react';
import './Dice.css';

import diceEmpty from './../../assets/images/dice-empty.png';
import dice1 from './../../assets/images/dice1.png';
import dice2 from './../../assets/images/dice2.png';
import dice3 from './../../assets/images/dice3.png';
import dice4 from './../../assets/images/dice4.png';
import dice5 from './../../assets/images/dice5.png';
import dice6 from './../../assets/images/dice6.png';

const Dice = () => {
  /* const [dice, setDice] = useState(diceEmpty);

  const rollDice = () => {
    let randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
    setDice(eval('dice' + randomNumber));
  }; */

  const allDice = [dice1, dice2, dice3, dice4, dice5, dice6];

  const getRandomDice = () => {
    return allDice[Math.floor(Math.random() * 6)];
  };

  const [dice, setDice] = useState(getRandomDice());

  const handleClick = () => {
    setDice(diceEmpty);
    setTimeout(() => setDice(getRandomDice()), 1000);
  };

  return <img src={dice} width={100} alt="random Dice" onClick={handleClick} />;
};

export default Dice;
