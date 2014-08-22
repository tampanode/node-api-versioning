var express = require('express');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var api = require('./routes/api')

var app = express();

app.use(bodyParser.json());

app.use('/', routes);
app.use('/api/', api)

module.exports = app;
