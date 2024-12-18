const { google } = require('googleapis');
const axios = require('axios');

async function predictCustomTrainedModel(body, hair, skin) {
  const project = 'glamgenie'; // Replace with your actual project ID
  const location = 'us-central1'; // Replace with your location
  const endpointId = ''; // Replace with your endpoint ID

  try {
    // Construct the parent resource
    const endpoint = `projects/${project}/locations/${location}/endpoints/${endpointId}`;

    // Authenticate with Google Cloud
    const auth = new google.auth.GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/cloud-platform'],
    });
    const client = await auth.getClient();
    const accessToken = await client.getAccessToken();

    // Construct request parameters
    const parameters = {
      structValue: {
        fields: {},
      },
    };

    // Request payload
    const requestBody = {
      instances: [
        {
          body_details: body,
          hair_details: hair,
          skin_details: skin,
        },
      ],
      parameters,
    };

    // API endpoint URL
    const url = `https://${location}-aiplatform.googleapis.com/v1/${endpoint}:predict`;

    // Make the prediction request
    const response = await axios.post(url, requestBody, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    // Extract the prediction result
    const predictions = response.data.predictions;
    return predictions;

  } catch (error) {
    console.error('Error during prediction:', error.response?.data || error.message);
    throw new Error('Prediction request failed');
  }
}

module.exports = { predictCustomTrainedModel };
