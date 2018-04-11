module.exports = function (app) {
    app.get('/produtos', function (req, res) {
        const mysql = require('mysql');

        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'casadocodigo'
        });

        connection.query('SELECT * FROM livros',
            function (err, result, fields) {
                res.render('produtos/lista', {
                    lista: result
                });
            }
        );
        connection.end();
    });
};