import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();  // useNavigate hook for navigation
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleRegister = () => {
    axios.post('http://localhost:8080/register', { username, password, verifyPassword })
      .then(response => {
        console.log('Registration successful', response.data);
        // Redirect to a dashboard or home page
        navigate('/login');
      })
      .catch(err => {
        if (err.response && err.response.status === 400) {
          // Validation errors
          setErrors(err.response.data);
        } else {
          // Other errors
          console.error('Registration error', err);
        }
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Verify Password"
        value={verifyPassword}
        onChange={(e) => setVerifyPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>

      {errors._global && <p style={{ color: 'red' }}>{errors._global}</p>}

      {Object.keys(errors).map(field => (
        <p key={field} style={{ color: 'red' }}>{errors[field]}</p>
      ))}
    </div>
  );
};

export default Register;
