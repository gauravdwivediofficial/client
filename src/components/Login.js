import React, { useState } from 'react';
import Redirect from 'react-dom'
// import {Redirect} from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    // Dummy credentials for authentication
    const dummyUsername = 'admin';
    const dummyPassword = 'password';

    // Simulating login authentication
    if (username === dummyUsername && password === dummyPassword) {
      // Successful login
      setIsLoggedIn(true);
      setUsername('');
      setPassword('');
      setErrorMessage('');
    } else {
      // Failed login
      setErrorMessage('Invalid username or password.');
    }
  };

  if (isLoggedIn) {
    // Redirect to Homepage or render the homepage component
    return <Redirect to="/homepage" />;
  }

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;