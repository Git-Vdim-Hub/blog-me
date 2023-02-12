const {User} = require('../models');

const userData = [
    {
        username: 'Vadim',
        email: 'vadim@email.com',
        password: '$2b$10$SUcP2RpavAZV6b5CEQPmSuycmWmejPj9b0/1XcOyc5fy/2uD3CLWy' //password1234
    },
    {
        username: 'Bob123',
        email: 'bob@email.com',
        password: '$2b$10$qhSAdBNLCXQ2Nre9N0zvHuru7/J0tDhUmdZhelDtAISZr5W6zrFBK' //password12345
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;