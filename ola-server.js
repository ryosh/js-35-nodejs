const http = require('http');
const porta = 3000;
const ip = 'localhost';

// req -> https://nodejs.org/api/http.html#http_class_http_incomingmessage
// res -> https://nodejs.org/api/http.html#http_class_http_serverresponse

// 1a. forma
// http.createServer(function (req, res) {
//     console.log('Recebendo request!');
//     res.end();
// }).listen(porta, ip);

// 2a. forma
http.createServer(function (req, res) {
    console.log('Recebendo request!');
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end('<html><body>Uma mensagem na tela!</body></html>');
}).listen(porta, ip);

console.log('Servidor executando em http://' + ip + ':' + porta);