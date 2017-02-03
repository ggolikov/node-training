require('babel-register');
import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';
import config from './config';
import router from './routes';
// import IndexPage from './components/IndexPage';

const app = express();

const server = app.listen(config.port, () => {
    console.log('Success');
});

app.use(router);
