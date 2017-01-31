require('babel-register');
import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';
import config from './config';
import router from './routes';
import IndexPage from './components/IndexPage';

const app = express();

const server = app.listen(config.port, () => {
    console.log('Success');
});

app.use(router);

app.use((req, res) => {
    const html = ReactDom.renderToString(<IndexPage name="TEAM" place="1" />);

    return res.end(renderHTML(html));

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
