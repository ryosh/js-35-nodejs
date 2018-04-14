const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

module.exports = function () {
    const app = express();

    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());
    // curl -X POST -H "Content-Type:application/json" -d '{"titulo":"novo","preco":150,"descricao":"descricao do livro"}' 'http://localhost:3000/produtos'

    app.use(expressValidator());

    app.set('view engine', 'ejs');

    load('routes')
        .then('infra')
        .into(app);

    app.use(function (error, req, res, next) {
        console.error('Erro no middleware');
        console.error(error);
        // res.status(500).render('erros/500');
        res.format({
            html: function () {
                res.status(500).render("erros/500");
            },
            json: function () {
                res.status(500);
                res.json({
                    'erro500': 'erro interno do servidor'
                });
            }
        });
    });

    app.use(function (req, res, next) {
        console.log('Recurso não encontrado: ' + req.originalUrl);
        // res.status(404).render("erros/404");
        res.format({
            html: function () {
                res.status(404).render("erros/404");
            },
            json: function () {
                res.status(404);
                res.json({
                    'erro404': 'recurso não encontrado'
                });
            }
        });
    });

    return app;
};