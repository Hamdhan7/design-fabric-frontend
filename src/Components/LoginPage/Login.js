// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // Assuming your backend sends a token in the response
        const token = data.token;
        // Store the token in localStorage or a secure storage mechanism
        localStorage.setItem('token', token);
        // Redirect to a protected route or perform other actions upon successful login
        console.log('Login successful');
      } else {
        // Handle login failure, show an error message, etc.
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="login-section">
      <div className="login-container">
        <h1>Login</h1>
        <div className="input-container">
          <input
            type="text"
            name="name"
            placeholder="User Name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="need-to-sign-up-text">
          <Link to="/auth/register">Need to Signup</Link>
        </div>
        <div className="login-button-section">
          <button className="login-button" onClick={handleLogin}>
            SignIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
