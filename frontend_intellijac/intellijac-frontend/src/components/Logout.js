import React from 'react';
import axios from 'axios';

const Logout = ({ history }) => {
  const handleLogout = () => {
    axios.get('http://localhost:8080/logout')
      .then(response => {
        console.log('Logout successful', response.data);
        // Redirect to the login page
        history.push('/login');
      })
      .catch(err => {
        console.error('Logout error', err);
      });
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
