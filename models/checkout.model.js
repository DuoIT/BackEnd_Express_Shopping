var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    infoUser : {
        idUSer: {type: String, require: true},
        name: {type: String, require: true},
        email: {type: String, require: true},
        phone: {type: String, require: true}
    },
    order : {
        name: {type: String, require: true},
        email: {type: String, require: true},
        phone: {type: String, require: true}
    },
    address : {
        street: {type: String, require: true},
        ward: {type: String, require: true},
        town: {type: String, require: true},
        city: {type: String, require: true}
    },
    method : {type: String, required: true},
    product : [
        {
            name: {type: String, require: true},
            price: {type: Number, require: true},
            qty: {type: Number, require: true},
        }
    ],
    subTotal: {type: Number, require: true},
    disCountCode: {type: Object, required: true},
    // {
    //     code : {type: String, required: true},
    //     startDate : {type: Date, required: true},
    //     endDate    : {type: Date, required: true},
    //     reduced : {type: Number, required: true}
    // },
    grandTotal: {type: Number, require: true},
});

module.exports = mongoose.model('CheckOut', schema);