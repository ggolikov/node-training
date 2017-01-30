'use strict'

const Sequelize = require('sequelize');
const config = require('../config');

module.exports = new Sequelize(config.get('database'), config.get('username'), config.get('password'), {
  host: 'localhost',
  dialect: 'postgres',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
