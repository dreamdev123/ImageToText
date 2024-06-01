const fs = require('fs').promises;
const path = require('path');

const { readFile, getFiles } = require('./getFile');
const { writeFile } = require('./wirte')
// setting input
const input_folder = path.join(__dirname, 'task');
const out_folder = path.join(__dirname, 'output');

const files = getFiles(input_folder);

for (let i = 0; i < files.length; i++) {
    const file = files[i];
    
}