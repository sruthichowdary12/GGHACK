const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = require("node-fetch"); // Ensure fetch is available in Node.js
require("dotenv").config();
const { VertexAI } = require('@google-cloud/vertexai');
const { generateOutfit } = require('./outfitGenerator'); // Assuming this file handles the Vertex AI API call
const { predictCustomTrainedModel } = require('./outfitGenerator');

// Initialize Firebase Admin
const serviceAccount = require("./service-account-file.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://glamgenie-14789.firebaseio.com", // Replace with your actual Firebase project URL
});

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Signup Route
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await admin.auth().createUser({
      email,
      password,
    });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  res
    .status(501)
    .json({ message: "Login handled on frontend via Firebase Auth SDK." });
});

// Outfit Generation Route
app.post('/generate-outfit', async (req, res) => {
  const { body, hair, skin } = req.body;

  try {
    // Call the prediction function
    const predictions = await predictCustomTrainedModel(body, hair, skin);
    res.status(200).json({ success: true, predictions });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});



// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
