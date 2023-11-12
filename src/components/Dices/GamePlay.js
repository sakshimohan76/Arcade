import React, { useState } from 'react'
import styled from 'styled-components';
import "../../Dices.scss";
import dice_1 from '../../images/dice_1.png';
import dice_2 from '../../images/dice_2.png';
import dice_3 from '../../images/dice_3.png';
import dice_4 from '../../images/dice_4.png';
import dice_5 from '../../images/dice_5.png';
import dice_6 from '../../images/dice_6.png';
import { Link } from 'react-router-dom';

const Box=styled.div`
background-color: ${(props)=>(props.isSelected ? 'black': 'white')};
color: ${(props)=>(!props.isSelected ? 'black': 'white')};`

const diceImages = {
    1: dice_1,
    2: dice_2,
    3: dice_3,
    4: dice_4,
    5: dice_5,
    6: dice_6
  };
const GamePlay = () => {
    const arrNumber=[1,2,3,4,5,6];
    const [selectedNumber,setSelectedNumber]=useState();
    const [score,setScore]=useState(0);
    const [currentDice, setCurrentDice]=useState(1);
    const [err,setErr]=useState("");
    const [showRules, setShowRules]=useState(false);

    const generateRandomNumber=(min,max)=>{
      return Math.floor(Math.random()*(max-min)+min);
    }
    const rollDice=()=>{
      if(!selectedNumber)
      { 
        setErr("Select a number first!")
        return;
      }
      const randomNumber=generateRandomNumber(1,7);
      setCurrentDice((prev)=>randomNumber);

      if(selectedNumber===randomNumber)
      {
        setScore((prev)=>prev+randomNumber);
      }else{
        setScore((prev)=>prev-2);
      }
      setSelectedNumber(undefined);
    };
    const numberSelectorHandler=(value)=>{
      setSelectedNumber(value);
      setErr("");
    }
    const resetScore=()=>
    {
      setScore(0);
      setErr("");
    }
  return (
    <div className="all">
    <Link to='/'><button>Back</button></Link>
   <div className='top'>
    <div className="side">
    <h1>{score}</h1>
    <h2>Total Score</h2>
    </div>
    <div className="both">
    <p className='err'>{err}</p>
    <div className='choose'>
        {arrNumber.map((value,i)=>(
         <Box className="box" isSelected={value===selectedNumber} key={i} onClick={()=>  numberSelectorHandler(value)}>{value}</Box>
        ))}
   </div>
   <b>Select a number</b>
    </div>
   </div>
   <div className="bottom">
   <img src={diceImages[currentDice]} alt="" onClick={rollDice} />
    <p>Click on Dice to roll.</p>
    <button onClick={resetScore}>Reset</button>
    <button onClick={()=>setShowRules((prev)=>!prev)}>{showRules? "Hide": "Show"} rules</button>
   </div>
   {showRules && <div className="rules">
    <h2>How to play the game?</h2>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
    </div>}
   </div>
  )
}

export default GamePlay