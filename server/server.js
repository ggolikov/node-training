'use strict'

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();

myEmitter.on('krya', () => {
    console.log('krya-krya');
});

myEmitter.emit('krya');

const http = require('http');
const url = require('url');
const fs = require('fs');

const server = new http.createServer().listen(1337);

server.on('request', (req, res) => {
    let info = fs.readFile('../README.md', (err, info) => {
        res.end(info);
    })
    console.log(this);
});
