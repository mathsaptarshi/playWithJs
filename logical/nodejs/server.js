const http = require('http');

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

const server = http.createServer((req, res) => {
    if(req.url === '/' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Server running at http://localhost:3000");
    }
    else if (req.url === '/users' && req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    } 
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
