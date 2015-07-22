'use strict'
let HomeModel = require('../models/homeModel'),
    mongoose = require('mongoose'),
    Home = mongoose.model('Home');

module.exports = class HomeController {
  constructor() {

  }
  getAllHomes(request, response) {
    let homes = HomeModel.allHomes();
    homes.then(function (homes) {
      if (homes.length > 0) {
        response(homes);
      } else {
        response('There are no homes in the database');
      }
    }, function (err) {
      response(homes);
    });

  }
};
