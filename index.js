//requiring NPM modeles
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var reload = require('reload');
var watch = require('watch');
var db = mongoose.connection;
var app = express();

db.on('error', console.error);

//requiring local modeles
var configs = require('./config');

// Uncomment the following lines to start logging requests to consoles.
// app.use(morgan('combined'));
// parse application/x-www-form-urlencoded.
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json.
app.use(bodyParser.json());

app.use('/testCoverage',express.static(path.join(__dirname, 'coverage', 'PhantomJS 2.1.1 (Windows 7 0.0.0)')));

app.use(express.static(path.join(__dirname, 'client')));

app.use(function(req, res) {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

//Finally starting the listener
var server = app.listen(configs.applicationPort, function () {
  console.log('Example app listening on port '+configs.applicationPort+'!');
});

/*var reloadServer = reload(server, app, true);
watch.watchTree(__dirname + '/client', function () {
    // Fire server-side reload event
    reloadServer.reload();
});*/
