const connectionFactory = require('../infra/connectionFactory');
module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        const connection = connectionFactory();
        connection.query('SELECT * FROM livros',
            function (err, result, fields) {
                res.render('produtos/lista', {
                    lista: result
                });
            }
        );
        connection.end();
    });
}