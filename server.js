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
1. route logout
2. redirect from user 1 to signed in user
3. do all page redirects if not logged in
9. write readMe



 */


const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const sequelize = require('./config/connection');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const models = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
const sess = {
    secret: 'Super secret secret',
    // Express session will use cookies by default, but we can specify options for those cookies by adding a cookies property to our session options.
    cookie: {
      // maxAge sets the maximum age for the cookie to be valid. Here, the cookie (and session) will expire after one hour. The time should be given in milliseconds.
      maxAge: 60 * 60 * 10000,
      // httpOnly tells express-session to only store session cookies when the protocol being used to connect to the server is HTTP.
      httpOnly: true,
      // secure tells express-session to only initialize session cookies when the protocol being used is HTTPS. Having this set to true, and running a server without encryption will result in the cookies not showing up in your developer console.
      secure: false,
      // sameSite tells express-session to only initialize session cookies when the referrer provided by the client matches the domain out server is hosted from.
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    //Sets up session store
    store: new SequelizeStore({
      db: sequelize,
    }),
};

app.use(session(sess));

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
