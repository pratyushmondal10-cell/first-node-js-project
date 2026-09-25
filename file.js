//file.js file
const fs = require('fs');

// write to file
fs.writeFileSync('test.txt','Hello Student!');

//read file
const data = fs.readFileSync('test.txt','utf8');
console.log(data)

         



