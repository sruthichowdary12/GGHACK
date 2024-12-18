import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Community from './pages/Community';
import OutfitGeneratorForm from './pages/OutfitGeneratorForm';  // Import the new component
//import ImageGenerator from './pages/Imagegenerator';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/community" element={<Community />} />
        <Route path="/generate" element={<OutfitGeneratorForm />} />
        <Route path="/profile" element={<profile />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
