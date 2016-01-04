
var express = require('express');
var bodyParser = require('body-parser');
var knex = require('./db/knex');
var app = express();
var knex = require('./db/knex');


var knex = require("knex")({
  client: "pg",
  connection: 'postgres://localhost/broncosfour',
  });

var Broncos = function () {
  return knex('bcos');
}

// use modules
app.use(express.static('./views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// get some routes goin'
var router = express();

// use dem routes
// app.use('/enter', router)

app.get('/', function(req, res, next){
  res.redirect('/index.html')
})

app.get('/get', function(res, res, next){
  knex('bcos').select().then(function(bcos){
    res.status(200).json({bcos: bcos});
  })
})

app.listen(3000, function(){
  console.log('Locked into port: 3000')
})
