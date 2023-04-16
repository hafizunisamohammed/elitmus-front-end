import React,{useState, useEffect} from 'react'
import './NumberGame.css'
import Top from '../../top/Top';
import Board from './components/Board/Board'
function NumberGame() {
  const [time, setTime] = useState(0);
  

    useEffect(() => {
      const timer = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  return (
    <>
    <Top/>
     <div className='num-app'>
      
      <p>Time: {time}</p>


        <Board time = {time} setTime={setTime} />
    </div>
    </>
   
  )
}

export default NumberGame