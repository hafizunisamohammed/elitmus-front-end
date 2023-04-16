import React from 'react'
import './heading.css'
import logo from './home/header/logo3.jpg'
function Heading() {
  return (
    <div className="heading">
        <img src={logo} alt="logo" />
        <h1>Puzzle</h1>
    </div>
  )
}

export default Heading