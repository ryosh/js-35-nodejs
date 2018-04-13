module.exports = function (app) {
    app.get('/', function (req, res) {
        const connection = app.infra.connectionFactory();
        const produtos = new app.infra.ProdutoDao(connection);
        produtos.lista(function (error, results, fields) {
            res.render('home/index', {
                livros: results
            });
        });
        connection.end();
    });
}