import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';
import sequelize from '../orm';
import models from '../models';
import IndexList from '../components/IndexList';
import Input from '../components/Input';
import Composition from '../components/Composition/Composition';
import Child from '../components/Composition/Child';


const bodyParser = require('body-parser');

const router = express.Router();

router.get('/', (req, res) => {
    sequelize
        .authenticate()
        .then(function(err) {
            models.User.findAll().then(teams => {
                let html = ReactDom.renderToString(<IndexList list={teams} />);

                return res.end(renderHTML(html));
            });
            console.log('Connection has been established successfully.');
        })
        .catch(function (err) {
            console.log('Unable to connect to the database:', err);
        });
    });

router.get('/input', (req, res) => {
    const html = ReactDom.renderToString(<Input />);

    res.send(renderHTML(html));
})

router.get('/composition', (req, res) => {
    const html = ReactDom.renderToString(
        <Composition color="green">
            <Input />
            <Child text=" uhlala"/>
        </Composition>
    );

    res.send(renderHTML(html));
})



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

module.exports = router;
