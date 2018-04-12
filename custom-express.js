const express = require('express');
const load = require('express-load');

module.exports = function () {
    const app = express();

    app.use(express.static('./public'));

    app.set('view engine', 'ejs');

    load('routes')
        .then('infra')
        .into(app);

    return app;
};