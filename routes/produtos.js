const connectionFactory = require('../infra/connectionFactory');
const ProdutoDao = require('../infra/ProdutoDao');

module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        const connection = connectionFactory();
        const produtoDao = new ProdutoDao(connection);
        
        produtoDao.lista(function (error, results, fields) {
            res.render('produtos/lista', {
                lista: results
            });
        });

        connection.end();
    });
}