import React from 'react';
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div className="homepage">
      <style jsx>{`
        /* General Reset */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Body and Background */
        body {
          font-family: 'Poppins', sans-serif;
          background-color: #f7f9fc;
          color: #333;
          overflow-x: hidden;
        }

        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 2rem;
          background-color: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(10px);
        }

        /* Container for Page Content */
        .content {
          margin-top: 80px; /* Adjusted for navbar height */
          padding: 20px;
          text-align: center;
        }

        /* Heading Style */
        h2 {
          font-size: 3rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        /* Subheading Style */
        p {
          font-size: 1.125rem;
          color: #666;
          margin-bottom: 4rem;
          line-height: 1.6;
        }

        /* About Section Style */
        .about-section {
          background-color: #ffffff;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          margin-top: 40px;
        }

        /* About Heading */
        .about-section h3 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
        }

        /* About Paragraph */
        .about-section p {
          font-size: 1.125rem;
          color: #555;
          line-height: 1.6;
        }
      `}</style>

      <Navbar />
      <div className="content">
        <h2>Our Model Gallery</h2>
        <p>Explore our curated collection of stunning models.</p>

        {/* About Section */}
        <div className="about-section">
          <h3>About GlamGenie</h3>
          <p>
            GlamGenie is an innovative platform dedicated to bringing the best models
            from around the world directly to your screen. Our curated collection showcases
            diverse styles and talents, perfect for your next project, event, or collaboration.
            Explore, create, and be inspired by the exceptional range of models available at your fingertips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
