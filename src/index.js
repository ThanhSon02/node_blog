const path = require('path');
const express = require('express');
const hsb = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
const db = require('./config/db');
const route = require('./routes');

db.connect();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
    'hbs',
    hsb.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resourse', 'views'));
app.use(methodOverride('_method'));
route(app);

app.listen(3000);
