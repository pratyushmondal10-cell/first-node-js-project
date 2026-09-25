//server.js
const http = require('http');

const server = http.createServer((req,res)=> {
    res.writeHead(200,{'Content-Type':'test/plain'});
    res.end('Hello from Node server!');
});

server.listen(5000,()=>{
    console.log('Server running at http://localhost:5000/');
});