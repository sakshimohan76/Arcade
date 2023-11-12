import Dices from '../../images/dices.png';
import "../../Dices.scss";
import { Link } from 'react-router-dom';

const StartGame = ({toggle}) => {
  return (
    <div className='full'>
    <Link to='/'><button>Back</button></Link>
    <div className="contain">
        <div className="left">
            <img src={Dices} alt="" />
        </div>
        <div className="right">
            <span>DICE GAME</span>
            <button onClick={toggle}>Play now</button>
        </div>
    </div>
    </div>
  )
}

export default StartGame