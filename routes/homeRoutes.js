'use strict'
let config = require('../config/application'),
    HomeController = require('../controllers/homeController');

let homeController = new HomeController();

function CNSayingRoutes(server) {

  server.route({
    method: 'GET',
    path: '/home',
    handler: homeController.getHome
  });

}

module.exports.routes = CNSayingRoutes;
