import express from 'express';
import sequelize from '../orm';
import models from '../models';

require("node-jsx").install({
    harmony: true,
    extension: ".jsx"
});

const router = express.Router();

router.get('/', (req, res) => {
    sequelize
        .authenticate()
        .then(function(err) {
            models.User.findAll().then(function(users) {
                res.json(users);
            });
            console.log('Connection has been established successfully.');
        })
        .catch(function (err) {
            console.log('Unable to connect to the database:', err);
        });
})

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
