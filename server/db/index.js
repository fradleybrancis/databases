var mysql = require('mysql');


var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect();

module.exports = connection;

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'chat'
});

connection.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log('Connected!');
});

connection.query('DESCRIBE Messages', function(err, rows, fields) {
  if (err) {
    throw err;
  }
  console.log(fields);
});