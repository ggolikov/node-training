import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';
import sequelize from '../orm';
import models from '../models';
import IndexPage from '../components/IndexPage';

const bodyParser = require('body-parser');

const router = express.Router();

router.get('/', (req, res) => {
    sequelize
        .authenticate()
        .then(function(err) {
            models.User.findAll().then(users => {
                let first = users[0].dataValues,
                    html = ReactDom.renderToString(<IndexPage name={first.name} place={first.place} />);

                return res.end(renderHTML(html));
            });
            console.log('Connection has been established successfully.');
        })
        .catch(function (err) {
            console.log('Unable to connect to the database:', err);
        });


        function renderHTML(html) {
            return `
                <!DOCTYPE html>
                <html>
                    <head>
                        <meta charset="utf-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Hello App</title>
                    </head>
                    <body>
                        ${html}
                    </body>
                </html>
            `;
        }
    });

router.get('/html', (req, res) => {
    const html = `
        <html>
            <head>
            </head>
            <body>
                <style>
                    body {
                        width: 100%;
                        height: 100%;
                        background-color: blue;
                    }
                </style>
                <div>
                    App
                </div>
            </body>
        </html>`;
        res.send(html);
})

module.exports = router;
