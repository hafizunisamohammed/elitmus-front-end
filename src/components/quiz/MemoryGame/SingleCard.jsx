import React from 'react'
import "./SingleCard.css"
import cover from './cover.png'
function SingleCard({card , handleChoice ,flipped , disabled}) {

    const handleClick = () =>{
      // if(!disabled) {
        handleChoice(card)
      
    }

  return (
    <div className="card" key={card.id}>
                    <div className={flipped ? "flipped" : ""}>
                        <img src={card.src}  className="front" alt="dynamic" />
                        <img 
                        src={cover} 
                        className='back' 
                        onClick={handleClick}
                        alt="card-back" />
                    </div>
                </div>
  )
}

export default SingleCard