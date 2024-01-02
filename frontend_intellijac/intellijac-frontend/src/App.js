import logo from './logo.svg';
import './App.css';
import './components/Rating.js';
import Ratings from './components/Rating.js';
import Flashcards from './components/Flashcards';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditFlashcards from './components/EditFlashcards.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Flashcards/>}/>
          <Route exact path="/editflashcard" element={<EditFlashcards/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
