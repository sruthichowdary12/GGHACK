const admin = require('firebase-admin');

// Initialize Firestore
const db = admin.firestore();

/**
 * Save outfit details to Firestore.
 * @param {string} body - Body details for the outfit.
 * @param {string} hair - Hair details for the outfit.
 * @param {string} skin - Skin details for the outfit.
 * @param {string} imageUrl - URL of the generated outfit image.
 */
const saveOutfitToFirestore = async (body, hair, skin, imageUrl) => {
  try {
    await db.collection('outfits').add({
      body,
      hair,
      skin,
      imageUrl,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    console.log('Outfit saved to Firestore');
  } catch (error) {
    console.error('Error saving outfit to Firestore:', error);
    throw new Error('Failed to save outfit to Firestore');
  }
};

module.exports = { saveOutfitToFirestore };
