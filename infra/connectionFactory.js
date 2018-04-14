const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

function createConnection(callback) {
    MongoClient.connect('mongodb://localhost/casadocodigo', function (err, client) {
        if (err) {
            console.error('Erro ao conectar ao MongoDB');
            return;
        }
        const db = client.db('casadocodigo');
        callback(client, db);
    });
}
module.exports = function () {
    return createConnection;
}