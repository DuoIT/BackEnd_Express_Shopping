var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    code : {type: String, required: true},
    startDate : {type: Date, required: true},
    endDate    : {type: Date, required: true},
    numberOfUses : {type: Number, required: true},
    reduced : {type: Number, required: true}
});

module.exports = mongoose.model('disCountCode', schema);