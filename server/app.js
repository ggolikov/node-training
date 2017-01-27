'use strict';
const express = require('express');

const app = express();
// console.log(app);
const server = app.listen('8080', () => {
    console.log('Success');
});

app.get('/', (req, res) => {
    // res.send('started!');
    // res.render('/index.html');
    res.send('index.html');
})
