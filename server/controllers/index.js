var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('our request body: ', req.body);
      // send req.body to our model
      models.users.post(req.body);
      // we believe this will run the models function that adds our given
      // data in req.body to the users table
      // there could be more steps

      
      
      // send ______ to our model and wait for model to send something back
      
      
      
      
      
      res.send('hello');
      res.end();
    }
  }
};

