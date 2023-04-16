import React from 'react'
import './Body.css'
import { Link } from 'react-router-dom'

function Body() {
  return (
    <div className='body'>
      <div className='body-text' >
          <h1>Puzzle</h1>
          <p>This is a puzzle game to test your soft skills. Put your best foot out there to complete this series of puzzles to stand out in front your peers and prove us that you are better at any skill. </p>
      </div>
      <div className='btn body-btn'>
      <Link to="/quiz">Play Now!</Link>
      </div>
    </div>//
  )
}

export default Body