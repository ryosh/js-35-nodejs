module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        app.infra.connectionFactory(function (client, db) {
            const produtoDao = new app.infra.ProdutoDao(db);
            produtoDao.lista(function (err, results) {
                console.log(results);
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
            client.close();
        });
    });

    app.get('/produtos/form', function (req, res) {
        res.render('produtos/form');
    });

    app.post('/produtos', function (req, res) {
        const livro = req.body;

        req.assert('titulo', 'Título deve ser preenchido').notEmpty();
        req.assert('preco', 'Preço deve ser um número').isFloat();
        const errors = req.validationErrors();
        if (errors) {
            console.log('há erros de validação!');
            res.format({
                html: function () {
                    res.status(400).render('produtos/form', {
                        validationErrors: errors
                    });
                },
                json: function () {
                    res.status(400).send(errors);
                }
            });
            return;
        }

        app.infra.connectionFactory(function (client, db) {
            const produtoDao = new app.infra.ProdutoDao(db);
            produtoDao.salva(livro, function (err, result) {
                res.redirect('/produtos');
            });
            client.close();
        });
    });

    app.get('/produtos/:id', function (req, res) {
        const id = req.params.id;
        app.infra.connectionFactory(function (client, db) {
            const produtos = new app.infra.ProdutoDao(db);
            produtos.obtem(id, function (error, result) {
                res.format({
                    html: function () {
                        res.render('produtos/busca', {
                            produto: result[0]
                        });
                    },
                    json: function () {
                        res.json(result);
                    }
                });
            });
            client.close();
        });
    });
}