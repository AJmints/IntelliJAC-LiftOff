import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

function Registerforms () {
const[registerform, setRegisterform]=useState({
username: "",
password: "",
verifyPassword: "",
}
)

const{username,password,verifyPassword}=registerform;
const navigate = useNavigate();

const onInputChange = (e) => {
setRegisterform({...registerform,[e.target.name]: e.target.value});
};
const onSubmit = async(e) => {
e.preventDefault();
await axios.post("http://localhost:8080/register", registerform);
navigate('/login');
};

return (
    <div className="container" style={{ marginRight: '50px', margin: '10px auto'}}>
      <h1>Register Here!!</h1>
      <form onSubmit={(e) => onSubmit(e)} className="login-form-container">
        <div>
          <label htmlFor="registerform-username" className="form-label">
            Username:
          </label>
          <input
            type="text"
            id="registerform-username"
            name="username"
            placeholder="Username"
            onChange={(e) => onInputChange(e)}
            value={username}
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="registerform-password" className="form-label" >
            Password:
          </label>
          <input
            type="password"
            id="registerform-password"
            name="password"
            placeholder="Password"
            onChange={(e) => onInputChange(e)}
            value={password}
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="registerform-verifyPassword" className="form-label" style={{ marginLeft: '-40px' }}>
            Verify Password:
          </label>
          <input
            type="password"
            id="registerform-verifyPassword"
            name="verifyPassword"
            placeholder="Verify Password"
            onChange={(e) => onInputChange(e)}
            value={verifyPassword}
            className="form-input"
          />
        </div>
<div className="button-container">
        <button type="submit" className="button">
          Submit
        </button>

        </div>
      </form>
    </div>
  );
}

export default Registerforms;
