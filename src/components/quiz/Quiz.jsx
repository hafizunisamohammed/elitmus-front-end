import React from 'react'


import {  Link } from "react-router-dom";
import Top from '../top/Top'
import './Quizz.css'
function Quiz() {
  return (
    <>
    <Top/>
    <div className="quiz-details">

    <div className="description data">
      <p>This Puzzle is divided into 4 stages, each stage based on a different technical skill. After completing one stage then only you will be able to go to the next stage or end the puzzle. If your are ready click on the the button to start the puzzle. </p>
    </div>
    <div className='insturction-links'>
          <div className='instruction-links-btn'>
            <ul>
              <li>
              <Link className='btn' to="/">Home</Link>
              </li>
              <li>
              <Link className='btn' to="/quiz/VideoPuzzle">Proceed</Link>
              
              </li>
            </ul>
         
          
          
          </div>
            
          
    </div>
    </div>
    

    </>
  )
}

export default Quiz