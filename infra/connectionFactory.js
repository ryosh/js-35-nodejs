const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/casadocodigo');

const LivroSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    preco: {
        type: Number,
        min: 0
    },
    descricao: {
        type: String,
        trim: true
    }
});

const model = mongoose.model('Livro', LivroSchema);

function createConnection() {
    return model;
}

module.exports = function () {
    return createConnection;
}