import React,{useState} from 'react'
import './Situation.css'
import Top from '../../top/Top'

import {  Link } from "react-router-dom";
function Situation() {
  const [ans,setAns] = useState(false)
  console.log(ans)
  return (
    <>
    <Top/>
    <div className="situation-puzzle">
        
        <div className="situation-question description">
            <p>Consider a situation where you traveled to a mountain with your friends in a hiking trip. You made the decision to return before dusk, but you ran into trouble. At this point, there is some tension among your friends, and one of your friends is to blame for this.  What will you do in this role as a group member? </p>
        </div>
        <div className='situation-answers'>
            <button className='video-puzzle-btn' onClick={() => setAns(false)}>Sit back and enjoy the fight</button>
            
            <button className='video-puzzle-btn'onClick={() => setAns(true)}>Listen to what every one has to say and then help solve the conflict</button>
            <button className='video-puzzle-btn'onClick={() => setAns(false)}>Ask the friend creating the nuance to leave</button>
        </div>
        
        <Link className='btn' to="/quiz/NumberGame">Next-stage</Link>
    </div>
    </>
  )
}

export default Situation