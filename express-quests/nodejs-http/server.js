const http = require('http');
const port = 8000;

// Gestionnaire de requêtes
// Notre application appellera cette fonction à chaque fois que le serveur recevra une requête, afin de remplir la réponse.

/**
 * @request informations envoyées du client vers le serveur
 * @response informations envoyées du serveur vers le client
 */
const requestHandler = (request, response) => {
    console.log(request.url);

    if (request.url === '/') {
        response.end('Welcome to the homepage!');
    } else if (request.url === '/about') {
        response.end('Welcome to the about page!');
    } else {
        response.end('Error 404');
    }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        console.error('Something bad happened');
    } else {
        console.log(`Server is listening on ${port}`)
    }
});

