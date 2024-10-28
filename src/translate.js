const { Translate } = require('@google-cloud/translate').v2;

// Creates a client
const translate = new Translate();

async function translateText(text, target) {
  try {
    let [translations] = await translate.translate(text, target);
    translations = Array.isArray(translations) ? translations : [translations];
    console.log('Translations:');
    translations.forEach((translation, i) => {
      console.log(`${text[i]} => (${target}) ${translation}`);
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports = translateText;