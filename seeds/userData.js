const {User} = require('../models');

const userData = [
    {
        name: 'Vadim',
        email: 'vadim@email.com',
        password: ''
    },
    {
        name: 'Bob',
        email: 'bob@email.com',
        password: ''
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;