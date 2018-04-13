const express = require('../../custom-express')();
const request = require('supertest')(express);
const DatabaseCleaner = require('database-cleaner');

describe('#ProdutosController', function () {

    beforeEach(function (done) {
        const databaseCleaner = new DatabaseCleaner('mysql');
        databaseCleaner.clean(express.infra.connectionFactory(), done);
    });
    after(function (done) {
        const databaseCleaner = new DatabaseCleaner('mysql');
        databaseCleaner.clean(express.infra.connectionFactory(), done);
    });

    it('listagem de produtos json', function (done) {
        request.get('/produtos')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('listagem de produtos html', function (done) {
        request.get('/produtos')
            .expect('Content-Type', /html/)
            .expect(200, done);
    });

    it('cadastro de produto válido', function (done) {
        request.post('/produtos')
            .send({
                'titulo': 'novo',
                'preco': 150,
                'descricao': 'descricao do livro'
            })
            .expect('Content-Type', /text/)
            .expect(302, done);
    });

    it('cadastro de produto inválido', function (done) {
        request.post('/produtos')
            .send({
                'titulo': 'novo',
                'descricao': 'descricao do livro'
            })
            .expect('Content-Type', /text/)
            .expect(400, done);
    });
});