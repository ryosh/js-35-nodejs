const mongodb = require('mongodb')
const ObjectID = mongodb.ObjectID;

function ProdutoDao(db) {
    this._db = db;
};
ProdutoDao.prototype.lista = function (callback) {
    this._db.collection('livros').find().toArray(callback);
};
ProdutoDao.prototype.salva = function (livro, callback) {
    this._db.collection('livros').insert(livro, callback);
};

ProdutoDao.prototype.obtem = function (id, callback) {
    this._db.collection('livros').find({ _id: new ObjectID(id) }).toArray(callback);
};

module.exports = function () {
    return ProdutoDao;
};