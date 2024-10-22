const Tesseract = require('tesseract.js');

// #example: target = 'eng'
const recognizeTextFromImage = async (imagePath, target) => {
  try {
    const { data: { text } } = await Tesseract.recognize(
      imagePath,
      target,
      {
        logger: (m) => console.log(m),
      }
    );
    return text;
  } catch (error) {
    console.error('Error:', error);
  }
};

module.exports = { recognizeTextFromImage };