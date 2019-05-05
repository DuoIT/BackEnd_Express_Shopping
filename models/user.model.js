var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    username : {type: String, required: true},
    password : {type: String, required: true},
    email    : {type: String, required: true},
    name     : {type: String, required: true},
    phone     : {type: String, required: true},
    dateCreate : {type: Date, required: true}
});


module.exports = mongoose.model('User', schema);