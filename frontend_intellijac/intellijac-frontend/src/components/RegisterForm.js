import React from 'react';
import classNames from 'classnames';
import './app.css';
import fetchService from '../fetchService';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      verifyPassword: '',
      submittedSuccessfully: false,
    };
  }

  onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value, submittedSuccessfully: false });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password, verifyPassword } = this.state;

    const url = '/api/register';
    const method = 'POST';

    const requestBody = { username, password, verifyPassword };

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful response
        console.log(data);
        this.setState({ submittedSuccessfully: true });
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error);
        this.setState({ submittedSuccessfully: false });
      });
  };

  render() {
    const { submittedSuccessfully } = this.state;

    return (
      <div className="login-form-container">
        {submittedSuccessfully && (
          <div className="success-message">
            Registered successfully!
          </div>
        )}
<div className="form-margin">
        <form onSubmit={this.onSubmit}>
          <label className="form-group">
            Username:
            <input
              className="form-control"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.onChangeHandler}
            />
          </label>
          <label className="form-group" style={{ marginLeft: '30px' }}>
            Password:
            <input
              className="form-control"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChangeHandler}
            />
          </label>
          <label className="form-group" style={{ marginLeft: '30px' }}>
            Verify Password:
            <input
              className="form-control"
              type="password"
              name="verifyPassword"
              value={this.state.verifyPassword}
              onChange={this.onChangeHandler}
            />
          </label>
         <div className="centered-button-container">
                       <button className="btn btn-primary" type="submit" style={{ marginTop: '30px' }}>
                         Submit
                       </button>
                     </div>
        </form>
      </div>
      </div>
    );
  }
}
