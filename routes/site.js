module.exports = function (app) {
    app.get('/', function (req, res) {
        app.infra.connectionFactory(function (client, db) {
            const produtos = new app.infra.ProdutoDao(db);
            produtos.lista(function (err, results) {
                res.render('home/index', {
                    livros: results
                });
            });
            client.close();
        });
    });
}