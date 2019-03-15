var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    // input - a get request that specifies a username 
    // result - give back all the messages from that specified username



    post: function (data /* req.body from the controller */) {
      // input - post request from controller and have data available
      // how can we access that data through code
      
      // result - place data in database (index.js inside of db)
      // how do we send the data to database at the right place
  
      // go to users table and append the given data to that table





    }
      
  }
};

