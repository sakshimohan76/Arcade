import './SingleCard.css'

function SingleCard({card,handleChoice, flipped, disabled}) {
    const handleClick=()=>{
        if(!disabled)
        {
            handleChoice(card)
        }
    }
  return (
    <div className='card' key={card.id}>
        <div className={flipped ? "flipped" :""}>
            <img className='front' src={card.src} alt='card-front'/>
            <img onClick={handleClick} className='back' src='/img/cover.png' alt='card-back'/>
        </div>
    </div>
  )
}

export default SingleCard