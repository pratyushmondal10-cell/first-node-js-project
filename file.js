//file.js file
const fs = require('fs');

// write to file
fs.writeFileSync('test.txt','Hello Student! This is a test file');

//read file
const data = fs.readFileSync('test.txt','utf8');
console.log(data);

         



