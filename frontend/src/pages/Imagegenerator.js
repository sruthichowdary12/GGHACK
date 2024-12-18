import React, { useState } from 'react';

const ImageGenerator = () => {
  const [skinTone, setSkinTone] = useState('');
  const [bodyDetails, setBodyDetails] = useState('');
  const [season, setSeason] = useState('');
  const [occasion, setOccasion] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate the image based on the input (this can be customized later)
    setGeneratedImage('images/img1.png'); // Static image from public/images
  };

  return (
    <div className="form-container">
      <h1>Generate Outfit Image</h1>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Skin Tone:</label>
          <input
            type="text"
            value={skinTone}
            onChange={(e) => setSkinTone(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Body Details:</label>
          <input
            type="text"
            value={bodyDetails}
            onChange={(e) => setBodyDetails(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Season:</label>
          <input
            type="text"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Occasion:</label>
          <input
            type="text"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Generate Image
        </button>
      </form>

      {/* Only render this if the image URL is set */}
      {generatedImage && (
        <div className="generated-image">
          <h2>Generated Image</h2>
          <img
            src={generatedImage}
            alt="Generated Outfit"
            width="100%" // Ensure the image takes full width
            height="auto"
          />
        </div>
      )}

      {/* Internal CSS */}
      <style jsx>{`
        .form-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          text-align: center;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        h1 {
          font-family: 'Arial', sans-serif;
          color: #333;
          margin-bottom: 20px;
        }

        .input-group {
          margin-bottom: 15px;
        }

        label {
          font-size: 16px;
          font-weight: bold;
          color: #555;
          display: block;
          margin-bottom: 5px;
        }

        input {
          padding: 10px;
          width: 100%;
          max-width: 100%;
          font-size: 14px;
          border: 1px solid #ddd;
          border-radius: 4px;
          box-sizing: border-box;
        }

        button.submit-btn {
          padding: 12px 24px;
          background-color: #4CAF50;
          color: white;
          border: none;
          font-size: 16px;
          cursor: pointer;
          border-radius: 4px;
          transition: background-color 0.3s;
        }

        button.submit-btn:hover {
          background-color: #45a049;
        }

        .generated-image {
          margin-top: 20px;
        }

        .generated-image img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        input:focus {
          outline: none;
          border-color: #4CAF50;
        }

        input:focus, button:focus {
          box-shadow: 0 0 8px rgba(72, 187, 120, 0.5);
        }
      `}</style>
    </div>
  );
};

export default ImageGenerator;
