// TD1 - Exo 3 : affichage de l'URL demandée par le client 
const http = require('http');

const PORT = 1234;

function createServer() {
  return http.createServer((req, res) => {
    console.log(`URL demandée : ${req.url}`); // La ligne supplémentaire, qui mentionne l'URL demandée.
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Hello world !</h1>');
  });
}

if (require.main === module) {
  createServer().listen(PORT, () =>
    console.log(`Serveur en écoute sur http://localhost:${PORT}`)
  );
}

module.exports = { createServer };