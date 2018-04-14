function ProdutoDao(model) {
    this._model = model;
}

ProdutoDao.prototype.lista = function (callback) {
    this._model.find(callback);
}

ProdutoDao.prototype.salva = function (livro, callback) {
    const livroModel = new this._model(livro);
    livroModel.save(callback);
}

ProdutoDao.prototype.obtem = function (id, callback) {
    this._model.find({
        _id: id
    }, callback);
};

module.exports = function () {
    return ProdutoDao;
}