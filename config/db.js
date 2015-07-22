'use strict'
let mongoose = require( 'mongoose' ),
    dbURI = 'mongodb://localhost/homedb',
    dbOptions = {user: 'home', pass: 'home'},
    fs = require('fs');

mongoose.connect(dbURI, dbOptions);

mongoose.connection.once('connected', function () {
  //Make connectionError null incase it failed the first time.
  module.exports.connectionError = null;
  // Iterates through all ./models/*js files and create the schemas
  fs.readdirSync('./models/').forEach(function(curFile) {
    if (curFile.substr(-3) === '.js') {
      require('../models/' + curFile);
    }
  });
});
mongoose.connection.on('error',function (err) {
  module.exports.connectionError = err;
  console.log('Mongoose Connection Error: ' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});
process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});

module.exports.retryConnection = function () {
  mongoose.connect(dbURI, dbOptions);
};
