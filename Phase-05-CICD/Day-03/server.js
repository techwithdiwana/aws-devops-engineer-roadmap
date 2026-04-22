const http = require('http');

const server = http.createServer((req, res) => {
  res.end('🚀 Tech With Diwana - CI/CD Working!');
});

server.listen(3000);
