
import './App.css';
import About from './components/home/About/About';
import Help from './components/home/Help/Help';
import Home from './components/home/Home';
import Instruction from './components/home/Instrution/Instruction';
import Quiz from './components/quiz/Quiz';
import Result from './components/result/Result';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './components/Authenticaion/Register';
import Username from './components/Authenticaion/Username';
import VideoPuzzle from './components/quiz/VideoPuzzle/VideoPuzzle';
import MemoryGame from './components/quiz/MemoryGame/MermoryGame'
import Situation from './components/quiz/SituationGame/Situation';
import NumberGame from './components/quiz/NumberPuzzle/NumberGame'


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/quiz/NumberGame/result" element={<Result />} />
          <Route path="/instruction" element={<Instruction/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/help' element = {<Help/>}/>
          <Route path='/Username' element={<Username/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/quiz/VideoPuzzle' element={<VideoPuzzle/>}/>
          <Route path='/quiz/MemoryGame' element={<MemoryGame/>}/>
          <Route path='/quiz/Situation' element={<Situation/>}/>
          <Route path='/quiz/NumberGame' element={<NumberGame/>}/>
          

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
