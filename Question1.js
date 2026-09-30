// TD1 - Exo 1 : micro-service HTTP minimal sur le port 1234
const http = require('http');

const PORT = 1234;

function createServer() {
  return http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Hello world !</h1>');
  });
}

if (require.main === module) {
  createServer().listen(PORT, () =>
    console.log(`Serveur écoute sur http://localhost:${PORT}`)
  );
}

module.exports = { createServer };