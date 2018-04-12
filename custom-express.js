const express = require('express');
const load = require('express-load');
const bodyParser = require('body-parser');

module.exports = function () {
    const app = express();

    app.use(express.static('./public'));
    app.use(bodyParser.urlencoded());

    app.set('view engine', 'ejs');

    load('routes')
        .then('infra')
        .into(app);

    return app;
};