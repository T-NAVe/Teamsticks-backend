'use strict'

var mongoose = require ('mongoose');
var Schema =mongoose.Schema; 

var matchSchema = new Schema({
game: Object
},{ autoCreate: true});

module.exports = mongoose.model('Match',matchSchema)
