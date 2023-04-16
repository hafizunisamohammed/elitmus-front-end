import './Tile.css'

const Tile = ({ key,number,moveTile}) =>{
    console.log(key, number)
    return (
    <div
        onClick={() => moveTile(number)} 
        className={`number ${number.value === number.index + 1 ? 'correct' : ''} ${number.value===16 ? 'disabled' : ''} slot--${number.index}`}>
        {number.value === 16 ? '' : number.value}
    </div>
    )
}

export default Tile