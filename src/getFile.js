const fs = require('fs').promises;
const getFiles = async (path) => {
    try {
        const files = await fs.readdir(path);
        return files;
    } catch (err) {
        console.log('Unable to scan directory: ' + err);
    }
};

const readFile = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        return data;
    } catch (err) {
        console.error('Error reading file:', err);
    }
};

module.exports = { getFiles, readFile };