
// Babel ES6/JSX Compiler
// require('babel-register');
//
// var swig  = require('swig');
// var React = require('react');
// var ReactDOM = require('react-dom/server');
// var Router = require('react-router');
// var routes = require('./app/routes');
var config = require('./config');
var mongoose = require('mongoose');
var User = require('./models/user');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.bodyParser());
// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
  //
  // db.collection('test', function(err, collection) {});
  //
  // db.collection('test', {w:1}, function(err, collection) {});
  //
  // db.createCollection('test', function(err, collection) {});
  //
  // db.createCollection('test', {w:1}, function(err, collection) {});
});

// app.use(function(req, res) {
//   Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
//     if (err) {
//       res.status(500).send(err.message)
//     } else if (redirectLocation) {
//       res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
//     } else if (renderProps) {
//       var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
//       var page = swig.renderFile('views/index.html', { html: html });
//       res.status(200).send(page);
//     } else {
//       res.status(404).send('Page Not Found')
//     }
//   });
// });

// app.post('/', function (req, res) {
//     console.log(req.body);
//     //var sched=document.createElement("table");
//     //sched.innerHTML='<tr><td><label>Thing to do: </label><br/><input type="text" name="act1"class="activity"></td><td><label>Time (minutes): </label><br/><input type="text" name="time1"class="time"></td></tr>';
//     res.json(req.body);
//     // res.render('the_template', { name: req.body.name });
// });

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
