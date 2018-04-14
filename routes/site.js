module.exports = function (app) {
    app.get('/', function (req, res) {
        const connection = app.infra.connectionFactory();
        const produtoDao = new app.infra.ProdutoDao(connection);
        produtoDao.lista(function (err, results) {
            res.render('home/index', {
                livros: results
            });
        });
    });
}