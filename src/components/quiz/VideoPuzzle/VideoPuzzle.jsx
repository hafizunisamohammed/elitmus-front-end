import React,{useState} from 'react'
import "./VideoPuzzle.css"
import Top from '../../top/Top'

import {  Link } from "react-router-dom";
function VideoPuzzle() {

    const videoUrl = 'https://youtu.be/iR-JFks6uI0';
    const [rightAns,setrightAns] = useState(false)

    
    return (


    <>
    <Top/>
    <div className="video-Puzzle">
        
        <div className="upper-instruction">
            <h2>Watch the youtube video by clicking on the button to answer the following question</h2>
        </div>
        <div className="play-video-btn">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            <button>Play Video</button>
            </a>
        </div>
        <div className="description">
            <p>Now imagine you are the dog and the man is the company you are working for and the vulture is your best friend. Now your friend wants some valuable information from your company’s database which you have access to. Your friend really wants the information or else his/her carrier is at stake. What will you do in such a situation. </p>

        </div>
        <div className='answers'>
            <button className='video-puzzle-btn' onClick={() => setrightAns(false)} >Help your friend get the information he/she wants</button>
            <button className='video-puzzle-btn' onClick={() => setrightAns(true)}>Deny helping your friend and stay loyal to the company</button>
        </div>
        <Link className='btn' to="/quiz/MemoryGame">Next-stage</Link>
    </div>
    </>
    
  )
}

export default VideoPuzzle