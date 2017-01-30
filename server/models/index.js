const Sequelize = require('sequelize');
const sequelize = require('../orm');

var User = sequelize.define('user', {
  name: {
    type: Sequelize.STRING
  },
  place: {
    type: Sequelize.STRING
  }
});

module.exports = {
    User: User
}
