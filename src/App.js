import './App.css';
import dices from '../src/images/dices.png'
import cover from '../src/images/cover.png'
import flappy from '../src/images/flappy.png'
import snake from '../src/images/snake.jpg'
import wordle from '../src/images/wordle.png'
import tictactoe from '../src/images/tictactoe.png'
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='title'>ARCADE</div>
      <div className='container'>
      <div className='row1'>
      <div className='dice'>
      <div className='content'>
        <img src={dices} className='dices' alt='Dice'></img>
        <div className='text'>
          <b>DICE GAME</b>
          <p>Guess the number and test your luck!</p>
          <Link to='/dices'><button>Play now</button></Link>
        </div>
      </div>
      </div>
        <div className='memory'>
        <div className='content'>
        <img src={cover} className='cover' alt='Cover'></img>
        <div className='text-m'>
          <b>MEMORY GAME</b>
          <p>Remember the last card you saw?</p>
          <Link to='/memory'><button>Play now</button></Link>
        </div>
      </div>
        </div>
      </div>
      <div className='row2'>
      <div className='flappy'>
      <div className='content'>
        <img src={flappy} className='flappy' alt='flappy'></img>
        <div className='text-f'>
          <b>FLAPPY-BIRD</b>
          <p>Let's see how far you can go!</p>
          <Link to='/flappy'><button>Play now</button></Link>
        </div>
      </div>
      </div>
      <div className='snake'>
      <div className='content'>
        <img src={snake} className='snake' alt='snake'></img>
        <div className='text-s'>
          <b>SNAKE GAME</b>
          <p>Feed the snake as much as you can!</p>
          <Link to='/snake'><button>Play now</button></Link>
        </div>
      </div>
      </div>
      </div>
      <div className='row3'>
      <div className='tictactoe'>
      <div className='content'>
        <img src={tictactoe} className='tictactoe' alt='tictactoe'></img>
        <div className='text-t'>
          <b>TIC-TAC-TOE</b>
          <p>Play this classic game with your friend!</p>
          <Link to='/tictactoe'><button>Play now</button></Link>
        </div>
      </div>
      </div>
      <div className='wordle'>
      <div className='content'>
        <img src={wordle} className='wordle' alt='wordle'></img>
        <div className='text-w'>
          <b>WORDLE</b>
          <p>Can you guess the word?</p>
          <Link to='/wordle'><button>Play now</button></Link>
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>  
  );
}

export default App;
