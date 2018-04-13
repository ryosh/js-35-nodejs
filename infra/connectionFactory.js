var mysql = require('mysql');

let databaseName = 'casadocodigo';
if (process.env.NODE_ENV == 'test') {
    databaseName = 'casadocodigo_teste';
}

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: databaseName
    });
}

module.exports = function () {
    return createDBConnection;
}