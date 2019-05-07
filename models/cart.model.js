var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    userId : {type: String, required: true},
    productId : {type: String, required: true},
    name : {type: String, required: true},
    img : {type: String, required: true},
    cate : {type: String, required: true},
    des : {type: String, required: true},
    price : {type: Number, required: true},
    qty : {type: Number, required: true}
});

module.exports = mongoose.model('Cart', schema);