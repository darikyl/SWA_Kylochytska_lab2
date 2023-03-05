//server.js
const express = require('express');
const app = express();
const config = require('./config.js');

app.use("/", (req, res) => {
    res.redirect(config.get('url'));
});

module.exports = app;
