var mysql = require('mysql');

// mysql://b6af726548be23:3f5c957c@us-cdbr-iron-east-05.cleardb.net/heroku_19b20915e0391b4?reconnect=true

function createDBConnection() {
    if (process.env.NODE_ENV == 'production') {
        return mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
    }

    let databaseName = 'casadocodigo';
    if (process.env.NODE_ENV == 'test') {
        databaseName = 'casadocodigo_teste';
    }

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