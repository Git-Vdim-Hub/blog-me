/* PSEUDO CODE
To-Do:
1. write Handlebars shell code and follow remaining tutorial
2. Create homepage with dummy data
3. Create

 */


const express = require('express');
//const exphbs = require('express-handlebars');
const routes = require('./routes');
const sequelize = require('./config/connection');
//const session = require('express-session');
//const SequelizeStore = require('connect-session-sequelize')(session.Store);
const models = require('./models');
const app = express();
const PORT = process.env.PORT || 3001;

//const hbs = exphbs.create({});

//app.engine('handlebars', hbs.engine);
//app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Makes the express app use the route content.
app.use(express.static('public'));
app.use(routes);


sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`\nServer running on port ${PORT}. Visit http://localhost:${PORT}`);
    });
})
