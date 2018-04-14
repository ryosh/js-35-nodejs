module.exports = function (app) {
    app.get('/promocoes/form', function (req, res) {
        const connection = app.infra.connectionFactory();
        const produtoDao = new app.infra.ProdutoDao(connection);
        produtoDao.lista(function (error, results) {
            res.render('promocoes/form', {
                lista: results
            });
        });
    });
    app.post('/promocoes', function (req, res) {
        const promocao = req.body;
        app.get('io').emit('novaPromocao', promocao);
        res.redirect('/promocoes/form');
    });
}