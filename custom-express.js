const express = require('express');

module.exports = function () {
    const app = express();
    app.set('view engine', 'ejs');

    require('./routes/produtos')(app);
    
    return app;
};