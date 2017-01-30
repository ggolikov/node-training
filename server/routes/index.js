const express = require('express');
const sequelize = require('../orm');
const models = require('../models');

const router = express.Router();

router.get('/', (req, res) => {
    sequelize
        .authenticate()
        .then(function(err) {
            models.User.findAll().then(function(users) {
                res.json(users);
                console.log(users);
            });
            console.log('Connection has been established successfully.');
        })
        .catch(function (err) {
            console.log('Unable to connect to the database:', err);
        });
})

module.exports = router;
