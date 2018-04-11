const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/produtos', function (req, res) {
    console.log('Requisição chegou');
    res.render('produtos/lista');
});

const server = app.listen(3000, function () {
    console.log('Servidor rodando em http://localhost:3000');
});