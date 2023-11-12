import { useEffect, useState } from 'react';
import '../../Wordle.css';
import Board from './Board';
import Keyboard from './Keyboard';
import {colors} from './constants'
import wordBank from '../../wordBank.json';
import { Link } from 'react-router-dom';
function App6() {
  const [board,setBoard]=useState([
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]
  ]);
  const[attempt,setAttempt]=useState(0)
  const[pos,setPos]=useState(0)
  const [message,setMessage]=useState(false)
  const [won,setWon]=useState(false)
  const [gameState,setGameState]=useState('playing')
  const [word,setWord]=useState("")

  const getRandomWord=()=>{
    const randomIndex=Math.floor(Math.random()*wordBank.length)
    const randomWord=wordBank[randomIndex].toUpperCase()
    setWord(randomWord);
  }

  useEffect(()=>{
    getRandomWord();
  },[])
  const handleReset=()=>{
    setMessage(false)
    setGameState('playing')
    setBoard([
      ["","","","",""],
      ["","","","",""],
      ["","","","",""],
      ["","","","",""],
      ["","","","",""],
      ["","","","",""]
    ]);
    setAttempt(0);
    setPos(0)
    setWon(false)
    getRandomWord();
   }
  const letters=word.split("")
  const bgColor = {
    primary: colors.primary,
    secondary: colors.secondary,
    darkgrey: colors.darkgrey
  };

  useEffect(()=>{
    if(attempt>0)
    {
      checkGameState();
    }
  },[attempt])
  
  const checkGameState=()=>{
    const row=board[attempt-1];
    if(row.every((letter,i)=>letter===letters[i])){
      setWon(true)
      setMessage(true)
      setGameState('won')
    }
    else if(attempt===board.length && won)
    {
      setWon(true)
      setMessage(true)
      setGameState('won')
    }
    else if(attempt===board.length && !won)
    {
      setWon(false)
      setMessage(true)
      setGameState('lost')
    }
  }

 const handleSelectedLetter=(key)=>{
  if(greyCaps.includes(key))
  {
    return;
  }
  if(gameState!=='playing')
  {
    return;
  }
  const newBoard=[...board];
   if (key === 'del') {
    const prevPos=pos-1;
    if(prevPos>=0)
    {
      newBoard[attempt][prevPos]='';
      setPos(prevPos);
      setBoard(newBoard);
    }
    return;
    }
    if(key ==='enter')
    {
      if(pos>4)
      {
        setAttempt(attempt+1);
        setPos(0);
      }
      return;
    }
  else{
    const newBoard=[...board];
    if(pos < newBoard[0].length)
    {
      newBoard[attempt][pos]=key;
      setBoard(newBoard);
      setPos((prevPos)=>prevPos+1);
    }
    else{
      return;
    }
  }
 }

 const getBGcolor = (row, col) => {
  const letter=board[row][col]
  if (row >= attempt) {
    return {};
  }
  if (letter === letters[col]) {
    return  bgColor.primary ;
  }
  if (letters.includes(letter)) {
    return bgColor.secondary;
  }
  return bgColor.darkgrey;
};

const getKeyBGcolor=(color)=>{
  return newBoard.flatMap((attempt,i)=>attempt.filter((pos,j)=>
  getBGcolor(i,j)===color));

}
const newBoard=[...board]
const greenCaps=getKeyBGcolor(colors.primary);
const yellowCaps=getKeyBGcolor(colors.secondary);
const greyCaps=getKeyBGcolor(colors.darkgrey);

const isCellActive=(row,col)=>{
  return row===attempt && col===pos;
 }

  return (
    <div className="container6">
    <Link to='/'><button className='buttonBack3'>Back</button></Link>
      <h1 className='title6'>WORDLE</h1>
      <hr/>
      <div className='board6'>
      <Board isCellActive={isCellActive} board={board} attempt={attempt} word={word}/>
      {message && (won?<p className='won'>Congratulations!You've guessed the word.</p>:<p className='loss'>Out of moves.Try again. The word was <span className='right6'>'{word}'</span>.</p>)}
      <Keyboard onLetterClick={handleSelectedLetter} getBGcolor={getBGcolor} greenCaps={greenCaps} yellowCaps={yellowCaps} greyCaps={greyCaps}/>
      <button className='reset' onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App6;
