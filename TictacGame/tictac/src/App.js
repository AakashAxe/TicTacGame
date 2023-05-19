import './App.css';
import GameBoard from './gameboard/GameBoard';
import StoryBoard from './storyboard/StoryBoard';
import  {StartScreen }from './StartScreen';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/storyboard" element={<StoryBoard/>}/>
            <Route path="/gameboard" element={<GameBoard />}/>
            <Route index element={<StartScreen />}/>
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
