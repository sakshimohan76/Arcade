import React, { useState } from 'react';
import '../../TicTacToe.css';
import { Link } from 'react-router-dom';

function App5() {
  const [state,setState]=useState(Array(9).fill(null))
  const [XTurn,setXTurn]=useState(true);
  const handleState=(index)=>{
    if(state[index]==null){
    const newstate=[...state];
    newstate[index]=XTurn? 'X': 'O';
    setState(newstate)
    setXTurn(!XTurn);
    }
  }

  const checkWinner=()=>{
    const winnerlogic=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let logic of winnerlogic)
    {
      const [a,b,c]=logic;
      if(state[a] !==null && state[a]===state[b] && state[b]===state[c]){
        return state[a]
      }
    }
    return false
  }
  const winner=checkWinner();

  const handleReset=()=>{
    setState(Array(9).fill(null))
    setXTurn(true);
  }
  return (
  <div className='container5'>
    <Link to='/'><button className='buttonApp5'>Back</button></Link>
    <h1>Tic-Tac-Toe</h1>
    <div className='game'>
    {XTurn ? "Player X's turn" : "Player O's turn"}
      <div className='row1-5'>
        <div className='col-5' onClick={()=>handleState(0)}>{state[0]}</div>
        <div className='col-5' onClick={()=>handleState(1)}>{state[1]}</div>
        <div className='col-5' onClick={()=>handleState(2)}>{state[2]}</div>
      </div>
      <div className='row2-5'>
        <div className='col-5' onClick={()=>handleState(3)}>{state[3]}</div>
        <div className='col-5' onClick={()=>handleState(4)}>{state[4]}</div>
        <div className='col-5' onClick={()=>handleState(5)}>{state[5]}</div>
      </div>
      <div className='row3-5'>
        <div className='col-5' onClick={()=>handleState(6)}>{state[6]}</div>
        <div className='col-5' onClick={()=>handleState(7)}>{state[7]}</div>
        <div className='col-5' onClick={()=>handleState(8)}>{state[8]}</div>
      </div>
      {winner && <p className='pApp5'>PLAYER {winner} WON!</p>}
    <button onClick={handleReset} className='buttonApp5'>Reset</button>
    </div>
  </div>
  )
}

export default App5;
