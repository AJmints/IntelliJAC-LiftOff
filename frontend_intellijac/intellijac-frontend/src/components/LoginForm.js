//
//import React from 'react';
//import classNames from 'classnames';
//import './app.css';
//
//export default class LoginForm extends React.Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      firstName: '',
//      lastName: '',
//      username: '',
//      password: '',
//      isRegistering: false,
//      errors: {},
//      submittedSuccessfully: false,
//    };
//  }
//
//  validateForm = () => {
//    const { username, password, firstName, lastName } = this.state;
//    const errors = {};
//
//    // Validate username
//    if (!username.trim()) {
//      errors.username = 'Username is required';
//    }
//
//    // Validate password
//    if (!password.trim()) {
//      errors.password = 'Password is required';
//    } else if (password.length < 3 || password.length > 30) {
//      errors.password = 'Password must be between 3 and 30 characters';
//    }
//
//    // Validate first name
//    if (this.state.isRegistering && !firstName.trim()) {
//      errors.firstName = 'First name is required';
//    }
//
//    // Validate last name
//    if (this.state.isRegistering && !lastName.trim()) {
//      errors.lastName = 'Last name is required';
//    }
//
//    this.setState({ errors });
//    return Object.keys(errors).length === 0;
//  };
//
//  onChangeHandler = (event) => {
//    let name = event.target.name;
//    let value = event.target.value;
//    this.setState({ [name]: value, submittedSuccessfully: false, errors: {} });
//  };
//
//  onSubmit = (e) => {
//    e.preventDefault();
//
//    if (!this.validateForm()) {
//      return;
//    }
//
//    const { isRegistering, firstName, lastName, username, password } = this.state;
//
//    const url = isRegistering ? '/api/register' : '/api/login';
//    const method = isRegistering ? 'POST' : 'POST'; // Use 'POST' for both login and register
//
//    fetch(url, {
//      method: method,
//      headers: {
//        'Content-Type': 'application/json',
//      },
//      body: JSON.stringify({ firstName, lastName, username, password }),
//    })
//      .then((response) => response.json())
//      .then((data) => {
//        // Handle successful response
//        console.log(data);
//        this.setState({ submittedSuccessfully: true });
//      })
//      .catch((error) => {
//        // Handle error
//        console.error('Error:', error);
//        this.setState({ submittedSuccessfully: false });
//      });
//  };
//
//  render() {
//    const { isRegistering, errors, submittedSuccessfully } = this.state;
//
//    return (
//      <div className="login-form-container">
//        <div className="button-container">
//          <button
//            onClick={() => this.setState({ isRegistering: false })}
//            className={classNames("button", { active: !isRegistering })}
//          >
//            Login
//          </button>
//          <button
//            onClick={() => this.setState({ isRegistering: true })}
//            className={classNames("button", { active: isRegistering })}
//          >
//            Register
//          </button>
//        </div>
//
//        {submittedSuccessfully && (
//          <div className="success-message">
//            {isRegistering ? 'Registered successfully!' : 'Logged in successfully!'}
//          </div>
//        )}
//
//        <form onSubmit={this.onSubmit}>
//          {isRegistering && (
//            <>
//              <label className="form-label">
//                First Name:
//                <input
//                  className="form-input"
//                  type="text"
//                  name="firstName"
//                  value={this.state.firstName}
//                  onChange={this.onChangeHandler}
//                />
//                {errors.firstName && <div className="error-message">{errors.firstName}</div>}
//              </label>
//              <label className="form-label">
//                Last Name:
//                <input
//                  className="form-input"
//                  type="text"
//                  name="lastName"
//                  value={this.state.lastName}
//                  onChange={this.onChangeHandler}
//                />
//                {errors.lastName && <div className="error-message">{errors.lastName}</div>}
//              </label>
//            </>
//          )}
//
//          <label className="form-label">
//            Username:
//            <input
//              className="form-input"
//              type="text"
//              name="username"
//              value={this.state.username}
//              onChange={this.onChangeHandler}
//            />
//            {errors.username && <div className="error-message">{errors.username}</div>}
//          </label>
//          <label className="form-label">
//            Password:
//            <input
//              className="form-input"
//              type="password"
//              name="password"
//              value={this.state.password}
//              onChange={this.onChangeHandler}
//            />
//            {errors.password && <div className="error-message">{errors.password}</div>}
//          </label>
//          <div className="centered-button-container">
//            <button className="centered-button" type="submit">
//              Submit
//            </button>
//          </div>
//        </form>
//      </div>
//    );
//  }
//}
//
//

import React from 'react';
import { Link } from 'react-router-dom';
import './app.css'; // Ensure that styles are imported correctly
import fetchService from '../fetchService';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      submittedSuccessfully: false,
      error: null, // Add error state
    };
  }

  onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value, submittedSuccessfully: false, error: null });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    const url = '/api/login';
    const method = 'POST';

    const requestBody = { username, password };

    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Invalid credentials'); // Handle non-2xx responses
        }
        return response.json();
      })
      .then((data) => {
        // Handle successful response
        console.log(data);
        this.setState({ submittedSuccessfully: true, error: null });
      })
      .catch((error) => {
        // Handle error
        console.error('Error:', error.message);
        this.setState({ submittedSuccessfully: false, error: error.message });
      });
  };

  render() {
    const { submittedSuccessfully, error } = this.state;

    return (
      <div className="login-form-container">
        {error && <div className="error-message">{error}</div>}
        {submittedSuccessfully && (
          <div className="success-message">
            Logged in successfully!
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

            <div className="centered-button-container">
              <button className="btn btn-primary" type="submit" style={{ marginTop: '30px' }}>
                Log In
              </button>
            </div>
          </form>
          <p style={{ marginTop: '30px' }}>
            Dont have an account? <Link to="/register">Register for one</Link>
          </p>
        </div>
      </div>
    );
  }
}
