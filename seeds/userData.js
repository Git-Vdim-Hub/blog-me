const {User} = require('../models');

const userData = [
    {
        username: 'Vadim',
        email: 'vadim@email.com',
        password: ''
    },
    {
        username: 'Bob',
        email: 'bob@email.com',
        password: ''
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;