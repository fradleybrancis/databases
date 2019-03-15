var mysql = require('mysql');


// INDEX IS THE ENTRY POINT OF A MODULE, DIRECTORY... 

// Create a database connection and export it from this file.
// You will need to connect with the user "student", password: student,
// and to the database "chat".

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