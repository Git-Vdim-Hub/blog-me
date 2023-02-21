/* PSEUDO CODE
To-Do:
-Finish Comments
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
      /*A cookie with the HttpOnly attribute is inaccessible to the JavaScript Document.cookie API; it's only sent to the server. For example, cookies that persist in server-side sessions don't need to be available to JavaScript and should have the HttpOnly attribute. This precaution helps mitigate cross-site scripting (XSS) attacks. */
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

//listening on port 3001
sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`\nServer running on port ${PORT}. Visit http://localhost:${PORT}`);
    });
})
