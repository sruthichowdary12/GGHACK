import React, { useState } from 'react';
import img1 from '../images/img1.jpg';

const OutfitGeneratorForm = () => {
  const [body, setBody] = useState('');
  const [hair, setHair] = useState('');
  const [skin, setSkin] = useState('');
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate generating an outfit by showing a local image with a delay
    setTimeout(() => {
      setImageUrl(img1); // Replace with the actual path to your image
      setLoading(false);
    }, 1000); // Simulate a 1-second delay
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Generate Outfit</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Body Details:</label>
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Gender:</label>
          <input
            type="text"
            value={hair}
            onChange={(e) => setHair(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Skin Tone:</label>
          <input
            type="text"
            value={skin}
            onChange={(e) => setSkin(e.target.value)}
            style={styles.input}
            required
          />
        </div>
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Outfit'}
        </button>
      </form>

      {imageUrl && (
        <div style={styles.imageContainer}>
          <h3>Generated Outfit:</h3>
          <a
            href="https://your-shopify-store-url.com/collections/coats" // Replace with your Shopify coats URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={imageUrl}
              alt="Generated Outfit"
              style={{ ...styles.image, animation: 'fadeIn 3s ease-in-out' }}
            />
          </a>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    marginTop: '80px',
    backgroundColor: '#f8f8f8',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  label: {
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '16px',
  },
  button: {
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#4CAF50',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  imageContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 10s ease-in-out', // Slow fade-in animation
  },
};

// Add CSS fade-in animation
const stylesGlobal = `
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = stylesGlobal;
document.head.appendChild(styleSheet);

export default OutfitGeneratorForm;
