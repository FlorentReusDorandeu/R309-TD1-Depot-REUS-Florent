// TD1 Question 6 : retourner le fichier indiqué dans l'URL s'il existe.
const http = require('http');
const fs = require('fs');

const PORT = 1234;

function createServer() {
  return http.createServer((req, res) => {
    const { remoteAddress, remotePort } = req.socket;
    console.log(`Client ${remoteAddress}:${remotePort} -> ${req.url}`);

    const racine = new URL(req.url, 'http://localhost').pathname;

    if (racine === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>Hello world !</h1>');
    } else {
      // "/ok.html" -> lecture du fichier fichiersq6/ok.html
      fs.readFile(__dirname + '/fichiersq6' + racine, (err, data) => {
        if (!err) {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(data);
        } else if (err.code === 'EACCES' || err.code === 'EPERM') {
          // EACCES pour Linux ou EPERM pour Windows : pas le droit de lire
          res.writeHead(403, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end('<h1>403 Forbidden</h1>');
        } else {
          res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end('<h1>404 Not Found</h1>');
        }
      });
    }
  });
}

if (require.main === module) {
  createServer().listen(PORT, () =>
    console.log(`Serveur en écoute sur http://localhost:${PORT}`)
  );
}

module.exports = { createServer };