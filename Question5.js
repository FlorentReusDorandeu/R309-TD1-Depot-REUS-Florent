// TD1 - Exo 5 : 404 dans tous les cas sauf pour la racine "/"
const http = require('http');

const PORT = 1234;

function createServer() {
  return http.createServer((req, res) => {
    const { remoteAddress, remotePort } = req.socket;
    console.log(`Client ${remoteAddress}:${remotePort} -> ${req.url}`);

    const { racine } = new URL(req.url, 'http://localhost'); //On récupère l'URL demandée...

    if (racine === '/') { // ...qu'on compare avec la racine, si oui : Hello World, si non : 404
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>Hello world !</h1>');} 
      else { 
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 Not Found</h1>');
    }
  });
}

if (require.main === module) {
  createServer().listen(PORT, () =>
    console.log(`Serveur en écoute sur http://localhost:${PORT}`)
  );
}

module.exports = { createServer };