const express = require('express');
const routes = require('./controllers');
const path = require('path');
const session = require('express-session');
// const exphbs = require('express-handlebars');
// const helpers = require('./utils/helpers');

require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store)

const sess = {
    secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUnitialized: true,
    store: new sequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
// const hbs = exphbs.create({helpers});

// app.engine('handlebars',hbs.engine);
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});