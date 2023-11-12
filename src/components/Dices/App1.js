import { useState } from "react";
import "../../Dices.scss";
import StartGame from "./StartGame";
import GamePlay from "./GamePlay";
import { Route, Routes,Outlet  } from 'react-router-dom';
import React from 'react';

function App1() {
  const[isGameStarted, setIsGameStarted]=useState(false);

  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev);
  }
  return (
    <>
     <Routes>
      <Route
        path="/"
        element={
          <>
            {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
            <Outlet />
          </>
        }
      />
    </Routes>
    </>
  );
}

export default App1;
