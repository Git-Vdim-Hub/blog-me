const sequelize = require('../config/connection');
const seedUser = require('./User');
const seedPost = require('./Post');
const seedComment = require('./Comment');

const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedUser();

    await seedPost();

    await seedComment();

    process.exit(0);
};

seedAll();