const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');

module.exports = function () {
    const app = express();

    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded());
    
    app.use(bodyParser.json());
    // curl -X POST -H "Content-Type:application/json" -d '{"titulo":"novo","preco":150,"descricao":"descricao do livro"}' 'http://localhost:3000/produtos'

    app.set('view engine', 'ejs');

    load('routes')
        .then('infra')
        .into(app);

    return app;
};