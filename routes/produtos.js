module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        const connection = app.infra.connectionFactory();
        const produtoDao = new app.infra.ProdutoDao(connection);
        
        produtoDao.lista(function (error, results, fields) {
            res.render('produtos/lista', {
                lista: results
            });
        });

        connection.end();
    });
}