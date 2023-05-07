const express = require('express');
const path = require('path');
const hsb = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const db = require('./config/db');

db.connect();

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express(express.json()));

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
    'hbs',
    hsb.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resourse', 'views'));

route(app);

app.listen(3000);
