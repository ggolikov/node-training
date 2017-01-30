'use strict';
const express = require('express');
const config = require('./config');
const router = require('./routes');

const app = express();



const server = app.listen(config.get('port'), () => {
    console.log('Success');
});

app.use(router);
