const fs = require('fs').promises;
const path = require('path');
const recognizeTextFromImage = require('./convert')
const writeFile = require('./wirte');
const directoryPath = path.join(__dirname, 'task'); // Replace 'your-directory' with your directory path
const writeFilePath = path.join(__dirname, 'output');
var contents = '<html>';
const getFiles = async () => {
    try {
        const files = await fs.readdir(writeFilePath);

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            contents += '<p>';
            var text = await readFile(writeFilePath + '/' + file);
            contents += text;
            contents += "</p><hr/>";
        }
        // await files.forEach(async file => {
        //     // var text = await recognizeTextFromImage(directoryPath + '/' + file);

        //     // var path = writeFilePath + '/' + file + '.txt';
        //     // await writeFile(path, text);
        // });
        var path = writeFilePath + '/' + '.index.html';
        await writeFile(path, contents);
        console.log(contents);
    } catch (err) {
        console.log('Unable to scan directory: ' + err);
    }
};

const readFile = async (filePath) => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const lines = data.split('\n');
        
        if (lines.length > 1) {
            lines.pop(); // Remove the last line
            lines.pop(); 
        }
        const newData = lines.filter(line=>line !== '').join('\n');
        return newData;
    } catch (err) {
        console.error('Error reading file:', err);
    }
};

module.exports = { getFiles, readFile };