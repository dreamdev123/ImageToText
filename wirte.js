const fs = require('fs').promises;

const writeFile = async (filePath, data) => {
    try {
        await fs.writeFile(filePath, data);
        console.log('File has been written');
    } catch (err) {
        console.log('Error writing file:', err);
    }
};

module.exports = { writeFile };