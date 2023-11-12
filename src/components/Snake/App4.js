import React, { useEffect, useState } from 'react'
import '../../Snake.css'
import { Link } from 'react-router-dom';
const App4 = () => {
  let totalGridSize=20;
  let initialSnakePosition=[{x:totalGridSize/2,y:totalGridSize/2},
  {x:totalGridSize/2+1,y:totalGridSize/2}];

  const [food,setFood]=useState({x:5,y:5})
  const [snake,setSnake]=useState(initialSnakePosition)
  const [direction,setDirection]=useState("LEFT")
  const [score,setScore]=useState(0)
  const [paused, setPaused] = useState(false);
  const [highScore, setHighScore]=useState(score)
  function handlePause() {
    setPaused(!paused);
  }

  useEffect(() => {
    const interval = setInterval(updateGame, 200);
    return () => clearInterval(interval);
  }, [snake, food, direction, paused]);

  function renderBoard(){
    let cellArray=[];
    for(let row=0;row< totalGridSize;row++)
    {
      for(let col=0;col< totalGridSize;col++)
      {
        let className="cell"

        let isFood=food.x===row && food.y===col;
        if(isFood)
        {
          className=className+" food"
        }

        let isSnake=snake.some((ele)=>ele.x===row && ele.y===col)
        if(isSnake)
        {
          className=className+" snake4"
        }

        let isSnakeHead=snake[0].x===row && snake[0].y===col;
        if(isSnakeHead)
        {
          className=className+" snakeHead"
        }
        let cell=<div className={className} key={`${row}-${col}`}></div>
        cellArray.push(cell)
      }
    }
    return cellArray;
  }

  function gameOver(){
    setSnake(initialSnakePosition)
    setDirection("LEFT")
    setScore(0)
  }
  function updateGame(){
    if(paused)
    {
      return
    }
    else{
    if(snake[0].x<0||snake[0].x>20||snake[0].y<0||snake[0].y>20)
    {
      gameOver()
      return
    }

    let isBit=snake.slice(1).some((ele)=>ele.x===snake[0].x && ele.y===snake[0].y)
    if(isBit)
    {
      gameOver()
      return
    }
    let newSnake=[...snake]
    switch(direction)
    {
      case "LEFT":
        newSnake.unshift({x:newSnake[0].x,y:newSnake[0].y-1});
        break;
      case "RIGHT":
        newSnake.unshift({x:newSnake[0].x,y:newSnake[0].y+1});
        break;
      case "UP":
        newSnake.unshift({x:newSnake[0].x-1,y:newSnake[0].y});
        break;
      case "DOWN":
        newSnake.unshift({x:newSnake[0].x+1,y:newSnake[0].y});
        break;
    }

    let isFoodEaten=newSnake[0].x===food.x && newSnake[0].y===food.y;
    if(isFoodEaten)
    {
      setScore((prev)=>prev+1)
      renderFood();
    }else{
      newSnake.pop()
    }
    setSnake(newSnake)
    if(score>=highScore)
    {
        setHighScore(score)
    }
  }
  }
  function renderFood(){
    let xPos=Math.floor(Math.random()*totalGridSize);
    let yPos=Math.floor(Math.random()*totalGridSize);
    setFood({x:xPos,y:yPos});
  }
  function updateDirection(e){
    let code=e.code;
    switch(code){
      case "ArrowUp":
        if(direction!=="DOWN") setDirection("UP");
        break;
      case "ArrowDown":
        if(direction!=="UP") setDirection("DOWN");
        break;
      case "ArrowRight":
        if(direction!=="LEFT") setDirection("RIGHT");
        break;
      case "ArrowLeft":
        if(direction!=="RIGHT") setDirection("LEFT");
        break;
    }
  }
  useEffect(()=>{
    let intervel=setInterval(updateGame,200);
    return ()=>clearInterval(intervel,updateGame);
  });
  useEffect(()=>{
    document.addEventListener("keydown",updateDirection);
    return ()=>clearInterval("keydown",updateGame);
  })
  return (
    <div className='container4'>
    <Link to='/'><button className='buttonBack4'>Back</button></Link>
        <div className='highScore'>
            High Score:<span>{highScore}</span>
        </div>
        <div className='score'>
            Score:<span>{score}</span>
        </div>
        <div className='board'>
          {renderBoard()}
        </div>
        <button onClick={handlePause} className='buttonApp4'>Pause</button>
    </div>
   
  )
}

export default App4;