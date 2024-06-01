const { readFile } = require('./get')
const fs = require('fs').promises;
const path = require('path');
const writeFilePath = path.join(__dirname, 'output');

console.log(readFile(writeFilePath + '/IMG_0093.jpeg.txt'));