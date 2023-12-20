import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Loginforms () {
const[loginform,setLoginform]=useState({
username: "",
password: "",
}
)

const{username,password}=loginform;
const navigate = useNavigate();

const onInputChange = (e) => {
setLoginform({...loginform, [e.target.name]:e.target.value});
};
const onSubmit = async(e) => {
 e.preventDefault();
await axios.post("http://localhost:8080/login", loginform);
};

useEffect(() => {
    // Fetch initial data for the login form when the component mounts
    axios.get("http://localhost:8080/login")
      .then(response => {
        // Handle the response as needed, update component state, etc.
        console.log(response.data); // Log the response data for debugging
      })
      .catch(error => {
        // Handle errors
        console.error("Error fetching initial data for login form:", error);
      });
  }, []);

 return (
    <div className="container" style={{ marginRight: '50px', margin: '10px auto'}}>
      <h1>Lets Go!!</h1>
      <form onSubmit={(e) => onSubmit(e)} className="login-form-container">
        <div>
          <label htmlFor="loginform-username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="loginform-username"
            name="username"
            placeholder="Username"
            onChange={(e) => onInputChange(e)}
            value={username}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="loginform-password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            id="loginform-password"
            name="password"
            placeholder="Password"
            onChange={(e) => onInputChange(e)}
            value={password}
            className="form-input"
          />
        </div>
        <div className="button-container">
          <button type="submit" className="button">
            Login
          </button>
        </div>
      </form>
      <p style={{ marginTop: '30px' }}>
                  New member? Come, lets get started <Link to="/register">HERE!!</Link>
                </p>
    </div>
  );
}


export default Loginforms;