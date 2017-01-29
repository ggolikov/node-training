'use strict';
const express = require('express');
const config = require('../config');

const app = express();

const server = app.listen(config.get('port'), () => {
    console.log('Success');
});

function testing(req, res, next) {
    res.send('testing folder');
    res.end();
}

app.get('/', (req, res, next) => {
    console.log('logged');
    console.log(req.url);
    next();
}, (req, res) => {
    res.send('ф');
})

app.get('/test', testing);
