const { GoogleAuth } = require('google-auth-library');
const path = require('path');

const auth = new GoogleAuth({
  keyFilename: path.join(__dirname, 'path/to/service-account.json'), // Make sure this path is correct
  scopes: ['https://www.googleapis.com/auth/cloud-platform'],
});

const getClient = async () => {
  try {
    const client = await auth.getClient();
    return client;
  } catch (error) {
    console.error('Error getting Google client:', error);
    throw new Error('Failed to authenticate with Google Cloud');
  }
};

module.exports = { getClient };
