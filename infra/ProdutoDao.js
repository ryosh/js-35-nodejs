function ProdutoDao(connection) {
    this._connection = connection;
};
ProdutoDao.prototype.lista = function (callback) {
    this._connection.query('SELECT * FROM livros', callback);
};

module.exports = function () {
    return ProdutoDao;
};