import * as React from 'react';
import logo from './logo.svg';
import './styles/Authentication.css';
import './components/Rating.js';
import Ratings from './components/Rating.js';
import Flashcards from './components/Flashcards';

import Header from './components/Header.js';
import WelcomeContent from './components/WelcomeContent.js';
import Buttons from './components/Buttons.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm.js';
import RegisterForm from './components/RegisterForm.js';

import ContactButton from './components/ContactButton.js';
import ContactForm from './components/ContactForm.js';
import TeamButton from './components/TeamButton.js';
import TeamPage from './components/TeamPage.js';

import Resources from './components/Resources.js';

import EditFlashcards from './components/EditFlashcards.js';
import QuizPage from './components/QuizPage.js';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
        <Route path="/api/login" element={<LoginForm />} />
        <Route path="/api/register" element={<RegisterForm />} />
        <Route path="/api/contact" element={<ContactForm />} />
        <Route path="/api/team" element={<TeamPage />} />
        <Route path="/flashcards/addFlashcard" element={<Flashcards />} />
           <Route exact path="/flashcards" element={<Flashcards/>}/>
          <Route path="/editflashcard/:id" element={<EditFlashcards/>}/>
          <Route exact path="/resources" element={<Resources/>}/>
          <Route exact path="/rating" element={<Ratings/>}/>
          <Route exact path="/quiz" element={<QuizPage/>}/>


      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Header />
      <WelcomeContent />
      <Buttons />
      <ContactButton />
      <TeamButton />

    </>

  );
}

export default App;