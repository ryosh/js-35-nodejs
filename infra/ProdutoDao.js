function ProdutoDao(connection) {
    this._connection = connection;
};
ProdutoDao.prototype.lista = function (callback) {
    this._connection.query('SELECT * FROM livros', callback);
};

ProdutoDao.prototype.salva = function (livro, callback) {
    this._connection.query('insert into livros SET ?', livro, callback);
};

ProdutoDao.prototype.obtem = function (id, callback) {
    this._connection.query('SELECT * FROM livros WHERE id = ?', [id], callback);
};

module.exports = function () {
    return ProdutoDao;
};