import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful!');
      navigate('/generate'); // Redirect to Generate Page
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-header">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
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
          Login
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <p className="signup-link">
        Don't have an account?{' '}
        <a href="/signup" className="signup-link-text">
          Sign Up
        </a>
      </p>

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
        .login-container {
          background-color: #fff;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }

        /* Heading */
        .login-header {
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
          background-color: #4caf50;
          color: white;
          font-size: 1.1rem;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          background-color: #45a049;
        }

        .submit-btn:active {
          background-color: #388e3c;
        }

        /* Error Message */
        .error-message {
          color: #f44336;
          font-size: 0.9rem;
          text-align: center;
        }

        /* Footer Link */
        .signup-link {
          text-align: center;
          margin-top: 1rem;
        }

        .signup-link-text {
          color: #1e88e5;
          text-decoration: none;
          font-weight: 500;
        }

        .signup-link-text:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default Login;
