//this file connects the remaining code to the sequelize database, also enables heroku to use the created database through JAWSDB

const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      //uncomment below to see the sequelize cli back-end outputs
      //logging: false,
    },
  );
}

module.exports = sequelize;