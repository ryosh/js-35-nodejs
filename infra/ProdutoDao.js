function ProdutoDao(db) {
    this._db = db;
};
ProdutoDao.prototype.lista = function (callback) {
    this._db.collection('livros').find().toArray(callback);
};
ProdutoDao.prototype.salva = function (livro, callback) {
    this._db.collection('livros').insert(livro, callback);
};

module.exports = function () {
    return ProdutoDao;
};