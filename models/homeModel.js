'use strict';
let mongoose = require('mongoose');
// Creates a new Mongoose Schema object
let Schema = mongoose.Schema;

// Collection for the model and schema defenition
let HomeSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true }
  },{
    collection: 'homes'
  }
);

// Creates the Model
let Home = mongoose.model('Home', HomeSchema);

let getAllHomes = function () {
  let query = Home.find({});
  return query.exec();

};


module.exports =  {
 allHomes: getAllHomes
};
