"use strict";

let Hapi = require('hapi'),
    fs = require('fs'),
    config = require('./config/application');


let serverConfig = { };
let server = new Hapi.Server(serverConfig);

server.app.name = 'Home Api';

server.connection({port: 8000});

// Iterates through all ./routes files to init the routes for use in the api
fs.readdirSync('./routes').forEach(function(curFile) {
  if (curFile.substr(-3) === '.js') {
    let route = require('./routes/' + curFile);
    route.routes(server);
  }
});

server.start(function (err) {
  let dashChars = '+' + Array(32 + server.info.uri.length + server.app.name.length).join('-') + '+';
  console.log(dashChars);
  console.log('| Application `%s` is running at %s |', server.app.name, server.info.uri);
  console.log(dashChars);
});
