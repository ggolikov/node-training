import Sequelize from 'sequelize';
import sequelize from '../orm';

const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING
    },
    place: {
        type: Sequelize.STRING
    }
});

const models = {
    User: User
};

export default models;
