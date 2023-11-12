import React from 'react'
import '../../Wordle.css'
import {colors} from './constants'

const Board = ({isCellActive,board,attempt,word}) => {
  const letters=word.split("")
  const bgColor = {
    primary: colors.primary,
    secondary: colors.secondary,
    darkgrey: colors.darkgrey
  };
  
  const getBGcolor = (row, col) => {
    const letter=board[row][col]
    if (row >= attempt) {
      return {};
    }
    if (letter === letters[col]) {
      return { backgroundColor: bgColor.primary };
    }
    if (letters.includes(letter)) {
      return { backgroundColor: bgColor.secondary };
    }
    return {backgroundColor:bgColor.darkgrey}
  };

  return (
    <div className='board6'>
        <div className='row0-6'>
        <div className='col-6' style={isCellActive(0,0)?{backgroundColor:'grey'}:getBGcolor(0,0)} >{board[0][0]}</div>
        <div className='col-6' style={isCellActive(0,1)?{backgroundColor:'grey'}:getBGcolor(0,1)}>{board[0][1]}</div>
        <div className='col-6' style={isCellActive(0,2)?{backgroundColor:'grey'}:getBGcolor(0,2)}>{board[0][2]}</div>
        <div className='col-6' style={isCellActive(0,3)?{backgroundColor:'grey'}:getBGcolor(0,3)}>{board[0][3]}</div>
        <div className='col-6' style={isCellActive(0,4)?{backgroundColor:'grey'}:getBGcolor(0,4)}>{board[0][4]}</div>
      </div>
      <div className='row1-6'>
        <div className='col-6' style={isCellActive(1,0)?{backgroundColor:'grey'}:getBGcolor(1,0)}>{board[1][0]}</div>
        <div className='col-6' style={isCellActive(1,1)?{backgroundColor:'grey'}:getBGcolor(1,1)}>{board[1][1]}</div>
        <div className='col-6' style={isCellActive(1,2)?{backgroundColor:'grey'}:getBGcolor(1,2)}>{board[1][2]}</div>
        <div className='col-6' style={isCellActive(1,3)?{backgroundColor:'grey'}:getBGcolor(1,3)}>{board[1][3]}</div>
        <div className='col-6' style={isCellActive(1,4)?{backgroundColor:'grey'}:getBGcolor(1,4)}>{board[1][4]}</div>
      </div>
      <div className='row2-6'>
        <div className='col-6' style={isCellActive(2,0)?{backgroundColor:'grey'}:getBGcolor(2,0)}>{board[2][0]}</div>
        <div className='col-6' style={isCellActive(2,1)?{backgroundColor:'grey'}:getBGcolor(2,1)}>{board[2][1]}</div>
        <div className='col-6' style={isCellActive(2,2)?{backgroundColor:'grey'}:getBGcolor(2,2)}>{board[2][2]}</div>
        <div className='col-6' style={isCellActive(2,3)?{backgroundColor:'grey'}:getBGcolor(2,3)}>{board[2][3]}</div>
        <div className='col-6' style={isCellActive(2,4)?{backgroundColor:'grey'}:getBGcolor(2,4)}>{board[2][4]}</div>
      </div>
      <div className='row3-6'>
        <div className='col-6' style={isCellActive(3,0)?{backgroundColor:'grey'}:getBGcolor(3,0)}>{board[3][0]}</div>
        <div className='col-6' style={isCellActive(3,1)?{backgroundColor:'grey'}:getBGcolor(3,1)}>{board[3][1]}</div>
        <div className='col-6' style={isCellActive(3,2)?{backgroundColor:'grey'}:getBGcolor(3,2)}>{board[3][2]}</div>
        <div className='col-6' style={isCellActive(3,3)?{backgroundColor:'grey'}:getBGcolor(3,3)}>{board[3][3]}</div>
        <div className='col-6' style={isCellActive(3,4)?{backgroundColor:'grey'}:getBGcolor(3,4)}>{board[3][4]}</div>
      </div>
      <div className='row4-6'>
        <div className='col-6' style={isCellActive(4,0)?{backgroundColor:'grey'}:getBGcolor(4,0)}>{board[4][0]}</div>
        <div className='col-6' style={isCellActive(4,1)?{backgroundColor:'grey'}:getBGcolor(4,1)}>{board[4][1]}</div>
        <div className='col-6' style={isCellActive(4,2)?{backgroundColor:'grey'}:getBGcolor(4,2)}>{board[4][2]}</div>
        <div className='col-6' style={isCellActive(4,3)?{backgroundColor:'grey'}:getBGcolor(4,3)}>{board[4][3]}</div>
        <div className='col-6' style={isCellActive(4,4)?{backgroundColor:'grey'}:getBGcolor(4,4)}>{board[4][4]}</div>
      </div>
      <div className='row5-6'>
        <div className='col-6' style={isCellActive(5,0)?{backgroundColor:'grey'}:getBGcolor(5,0)}>{board[5][0]}</div>
        <div className='col-6' style={isCellActive(5,1)?{backgroundColor:'grey'}:getBGcolor(5,1)}>{board[5][1]}</div>
        <div className='col-6' style={isCellActive(5,2)?{backgroundColor:'grey'}:getBGcolor(5,2)}>{board[5][2]}</div>
        <div className='col-6' style={isCellActive(5,3)?{backgroundColor:'grey'}:getBGcolor(5,3)}>{board[5][3]}</div>
        <div className='col-6' style={isCellActive(5,4)?{backgroundColor:'grey'}:getBGcolor(5,4)}>{board[5][4]}</div>
      </div>
    </div>
  )
}
export default Board;