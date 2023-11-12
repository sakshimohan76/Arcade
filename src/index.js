import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App1 from './components/Dices/App1';
import App2 from './components/Memory/App2';
import App3 from './components/Flappy/App3';
import App4 from './components/Snake/App4';
import App5 from './components/TicTacToe/App5';
import App6 from './components/Wordle/App6';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/dices' element={<App1/>}/>
      <Route path='/memory' element={<App2/>}/>
      <Route path='/flappy' element={<App3/>}/>
      <Route path='/snake' element={<App4/>}/>
      <Route path='/tictactoe' element={<App5/>}/>
      <Route path='/wordle' element={<App6/>}/>
    </Routes>
    </BrowserRouter>
);
