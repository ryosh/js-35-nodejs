module.exports = function (app) {
    app.get('/promocoes/form', function (req, res) {
        app.infra.connectionFactory(function (client, db) {
            const produtoDao = new app.infra.ProdutoDao(db);
            produtoDao.lista(function (err, results) {
                res.render('promocoes/form', {
                    lista: results
                });
            });
        });
        client.close();
    });
    app.post('/promocoes', function (req, res) {
        const promocao = req.body;
        app.get('io').emit('novaPromocao', promocao);
        res.redirect('/promocoes/form');
    });
}