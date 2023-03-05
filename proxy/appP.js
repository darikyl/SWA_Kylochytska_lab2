const express = require("express");
const app = express();
const config = require('./config.js');

app.use(function (request, response) {
    response.redirect(config.get('url'));
});

app.listen(config.get('port'));

