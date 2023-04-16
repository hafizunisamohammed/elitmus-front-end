import React, { useEffect, useState } from 'react'
import './MemroyGame.css'
import SingleCard from './SingleCard'
import Top from '../../top/Top'
import {  Link } from "react-router-dom";


const cardImages = [
    {"src" : "/memoryGame/helmet-1.png" ,matched:false},
    {"src" : "/memoryGame/ring-1.png"   ,matched:false},
    {"src" : "/memoryGame/scroll-1.png" ,matched:false},
    {"src" : "/memoryGame/shield-1.png" ,matched:false},
    {"src" : "/memoryGame/sword-1.png"  ,matched:false},
    {"src" : "/memoryGame/potion-1.png" ,matched:false},
]

function MermoryGame() {

    const [cards,setCards] = useState([])
    const [turns,setTurns] = useState(0)
    const [choiceOne,setChoiceOne] = useState(null)
    const [choiceTwo,setChoiceTwo] = useState(null)
    const [disabled,setDisabled] = useState(false)



    //shuffle cards
    const shuffleCards = () =>{
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({ ...card,id: Math.random() }))
        setCards(shuffledCards)
        setTurns(0)
    }


    //handle a choice
    const handleChoice = (card) =>{
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    //reset choices and increase turn
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns+1)
        setDisabled(false)
    }

    //comparing 2 selected cards
    useEffect (()=>{

        

        if(choiceOne && choiceTwo){
            setDisabled(true)

            if(choiceOne.src === choiceTwo.src){
                setCards(prevCards => {
                    return prevCards.map(card =>{
                        if(card.src === choiceOne.src){
                            return {...card,matched:true}
                        } else{
                            return card 
                        }
                    })
                })
                resetTurn()
            }
            else{ console.log("those cards do not match")
                setTimeout(() => resetTurn(),1000)
            }
        }
    },[choiceOne,choiceTwo])

    // console.log(cards)

    //start a new game automatically
    useEffect (() =>{
        shuffleCards() 
    },[])

  return (
    <div className="app">
    <Top/>
          <h1>Magic Match</h1>
        <button className='magic-game-btn' onClick={shuffleCards}>New Game</button>
        <div className="card-grid">
            {cards.map(card =>(
                <SingleCard 
                key={card.id} 
                card = {card}
                flipped ={card === choiceOne || card=== choiceTwo || card.matched}
                handleChoice = {handleChoice}
                disabled={disabled}
                />
            ))}
        </div>
        <p>Turns: {turns}</p>
        <Link className='btn' to="/quiz/Situation">Next-stage</Link>
    </div>
  )
}

export default MermoryGame