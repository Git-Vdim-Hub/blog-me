/* PSEUDO CODE
API routing:
need to be able to post a post, and a comment
need to be able to get all posts with comments
need to be able to post and get users
need to be able to redirect between homepage, dashboard,login and signup

Different types of controllers: 
loginController: handles login page render, redirect after session created, posting a session

signUpController: just handles signup

homeController: handles display

dashController: handles posts


To-Do:
5. edit a post as user 1
6. create user login/sign up/session
7. redirect from user 1 to signed in user
8. update createdAt format
9. write readMe



 */


const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const sequelize = require('./config/connection');
//const session = require('express-session');
//const SequelizeStore = require('connect-session-sequelize')(session.Store);
const models = require('./models');
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

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
