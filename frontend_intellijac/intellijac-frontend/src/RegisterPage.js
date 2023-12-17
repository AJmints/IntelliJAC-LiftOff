// RegisterPage.js
import React from 'react';
import Register from './register';

const RegisterPage = ({ handleRegister }) => {
  return (
    <div className="register-page">
      <h2>Register</h2>
      <Register handleRegister={handleRegister} />
    </div>
  );
};

export default RegisterPage;
