// src/pages/Signup.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';  // Import auth from firebase.js
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate for redirection

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Signup successful!');
      navigate('/login');  // Redirect to login page on success
    } catch (err) {
      setError(err.message);  // Show error if signup fails
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-header">Sign Up</h2>
      <form onSubmit={handleSignup} className="signup-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-field"
        />
        <button
          type="submit"
          className="submit-btn"
        >
          Sign Up
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}

      <style jsx>{`
        /* Global Reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Arial', sans-serif;
        }

        body {
          background-color: #f5f5f5;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        /* Container Styling */
        .signup-container {
          background-color: #fff;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }

        /* Heading */
        .signup-header {
          text-align: center;
          font-size: 2rem;
          color: #333;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        /* Input Fields */
        .input-field {
          width: 100%;
          padding: 12px 16px;
          margin-bottom: 1rem;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .input-field:focus {
          border-color: #4caf50;
          box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
        }

        /* Button */
        .submit-btn {
          width: 100%;
          padding: 12px 16px;
          background-color: #1e88e5;
          color: white;
          font-size: 1.1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #1976d2;
        }

        .submit-btn:active {
          background-color: #1565c0;
        }

        /* Error Message */
        .error-message {
          color: #f44336;
          font-size: 0.9rem;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Signup;
