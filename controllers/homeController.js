'use strict'
module.exports = class HomeController {
  constructor() {

  }
  getHome(request, response) {
    response({home: 'A beautiful place'});
  }
}
