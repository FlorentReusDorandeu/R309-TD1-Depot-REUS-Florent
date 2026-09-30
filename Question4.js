// Exo 4 : affichage de l'adresse IP et du port du client 
const http = require('http');

const PORT = 1234;

function createServer() {
  return http.createServer((req, res) => {
    const {remoteAddress, remotePort} = req.socket; //Récupération de l'adresse IP et du Port
    console.log(`Client ${remoteAddress}:${remotePort} -> ${req.url}`); //Affichage
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