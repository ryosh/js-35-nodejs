module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        const connection = app.infra.connectionFactory();
        const produtos = new app.infra.ProdutoDao(connection);
        produtos.lista(function (error, results, fields) {
            res.format({
                html: function () {
                    res.render('produtos/lista', {
                        lista: results
                    });
                },
                json: function () {
                    res.json(results);
                }
            });
        });
        connection.end();
    });

    app.get('/produtos/form', function (req, res) {
        res.render('produtos/form');
    });

    app.post('/produtos', function (req, res) {
        const livro = req.body;
        const connection = app.infra.connectionFactory();
        const produtos = new app.infra.ProdutoDao(connection);
        produtos.salva(livro, function (exception, result) {
            res.redirect('/produtos');
        });
    });
}