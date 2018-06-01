var express = require('express');
var mysql = require('mysql');
var mysqltorest  = require('mysql-to-rest');
var app = express();

var connection = mysql.createConnection({
  host: 'mysql://mysql:3306/',
  user: 'user7GC',
  password: 'yKiS3ueNQkutmI3x',
  database: 'test'
})

var api = mysqltorest(app,connection);

//start Server
var server = app.listen(1235,function(){

   console.log("Listening to port %s",server.address().port);

});
