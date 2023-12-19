import * as React from 'react';
import './app.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './Header';
import WelcomeContent from './WelcomeContent';
import Buttons from './Buttons';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Header pageTitle="IntelliJAC Quiz" />
      <WelcomeContent />
      <Buttons />
    </>
  );
}

export default App;
