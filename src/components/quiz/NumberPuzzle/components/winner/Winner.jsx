import NewGame from '../new-game/NewGame'
import './Winner.css'

const Winner = ({numbers,reset,time,compTime,setcompTime}) => {
    if (!numbers.every(n => n.value === n.index +1)){
        setcompTime(time)
        return null
        
    }    
        console.log(compTime)

    return <div 
        className="winner">
        <p>You win!</p>
        <p>Time:{time}</p>
        <NewGame reset={reset} />
    </div>
}

export default Winner