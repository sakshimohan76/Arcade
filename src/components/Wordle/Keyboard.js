import React from 'react';
import '../../Wordle.css';
import { colors } from './constants';

const Keyboard = ({onLetterClick,greenCaps=[],yellowCaps=[],greyCaps=[]}) => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const getKeyBGcolor=(key) => {
    if(greenCaps.includes(key))
    {
      return colors.primary;
    }    
    if(yellowCaps.includes(key))
    {
      return colors.secondary;
    }    
    if(greyCaps.includes(key))
    {
      return colors.darkgrey;
    }    
    return colors.blue;
  };
  return (
    <div>
      <div className='keyboard'>
      <div className='line1-6' >
        {keys1.map((key) => (
          <div className='key' key={key} onClick={() => onLetterClick(key)} style={{ backgroundColor: getKeyBGcolor(key) }}>
            {key}
          </div>
        ))}
      </div>

      <div className='line2-6'>
        {keys2.map((key) => (
          <div className='key' key={key} onClick={() => onLetterClick(key)} style={{ backgroundColor: getKeyBGcolor(key) }}>
            {key}
          </div>
        ))}
      </div>

      <div className='line3-6'>
        <div className='enter' onClick={() => onLetterClick('enter')}>ENTER</div>
        {keys3.map((key) => (
          <div className='key' key={key} onClick={() => onLetterClick(key)} style={{ backgroundColor: getKeyBGcolor(key) }}>
            {key}
          </div>
        ))}
        <div className='del' onClick={() => onLetterClick('del')}>DELETE</div>
      </div>
    </div>
    </div>
  );
};

export default Keyboard;
