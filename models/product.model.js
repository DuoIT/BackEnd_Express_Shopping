var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var Product = new Schema({
  name 			: {type: String, required: true},
  img 			: {type: String, required: true},
  cate 		    : {type: String, required: true},
  des 			: {type: String, required: true},
  price 		: {type: Number, required: true},
  quantity 		: {type: Number, required: true}
});

module.exports = mongoose.model('Product', Product);