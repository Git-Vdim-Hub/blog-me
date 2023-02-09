const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

//Makes the express app use the route content.
app.use(express.static('public'));
app.use(routes);


sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('Running on port '+PORT);
    });
})
