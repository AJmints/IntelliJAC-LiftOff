import React from 'react';
import classNames from 'classnames';
import './app.css';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      isRegistering: false,
      errors: {},
    };
  }

  validateForm = () => {
    const { username, password, firstName, lastName } = this.state;
    const errors = {};

    // Validate username
    if (!username.trim()) {
      errors.username = 'Username is required';
    }

    // Validate password
    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 3 || password.length > 40) {
      errors.password = 'Password must be between 3 and 40 characters';
    }

    // Validate first name
    if (this.state.isRegistering && !firstName.trim()) {
      errors.firstName = 'First name is required';
    }

    // Validate last name
    if (this.state.isRegistering && !lastName.trim()) {
      errors.lastName = 'Last name is required';
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  };

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.validateForm()) {
      return;
    }

    const { isRegistering, firstName, lastName, username, password } = this.state;

    if (isRegistering) {
      this.props.onRegister(firstName, lastName, username, password);
    } else {
      this.props.onLogin(username, password);
    }
  };

  render() {
    const { isRegistering, errors } = this.state;

    return (
      <div className="login-form-container">
        <div className="button-container">
          <button
            onClick={() => this.setState({ isRegistering: false })}
            className={classNames("button", { active: !isRegistering })}
          >
            Login
          </button>
          <button
            onClick={() => this.setState({ isRegistering: true })}
            className={classNames("button", { active: isRegistering })}
          >
            Register
          </button>
        </div>

        <form onSubmit={this.onSubmit}>
          {isRegistering && (
            <>
              <label className="form-label">
                First Name:
                <input
                  className="form-input"
                  type="text"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.onChangeHandler}
                />
                {errors.firstName && <div className="error-message">{errors.firstName}</div>}
              </label>
              <label className="form-label">
                Last Name:
                <input
                  className="form-input"
                  type="text"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.onChangeHandler}
                />
                {errors.lastName && <div className="error-message">{errors.lastName}</div>}
              </label>
            </>
          )}

          <label className="form-label">
            Username:
            <input
              className="form-input"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.onChangeHandler}
            />
            {errors.username && <div className="error-message">{errors.username}</div>}
          </label>
          <label className="form-label">
            Password:
            <input
              className="form-input"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.onChangeHandler}
            />
            {errors.password && <div className="error-message">{errors.password}</div>}
          </label>
          <div className="centered-button-container">
            <button className="centered-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
