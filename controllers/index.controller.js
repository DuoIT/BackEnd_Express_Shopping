var Categories = require('../models/category.model');
var Products = require('../models/product.model');
var Cart = require('../models/cart.model')
var Contact = require('../models/contact.model')
ObjectId = require('mongodb').ObjectID;

module.exports.getHome = (req, res, next) => {
    return Products.find()
    .then(product => {
        Categories.find()
        .then(cate => {
            return res.status(200).json({
                products: product,
                cates: cate
            });
        })
        .catch(err => {
            return res.status(500).json({
                error: err
            });
        })       
    })
    .catch(err => {
            console.log(err);
            return res.status(500).json({
                error: err
            });
    });
};

module.exports.detail = (req, res, netx) => {
    var id = req.params.id;
    console.log(id);
    // 5cb76acc3212d60fb87d6d71
    Products.findById(id)
    .then(data => {
        return res.status(200).json({product: data})
    })
    .catch(err => {
        return res.status(404).json({err: err});
    })
};

module.exports.postAddToCart = (req, res, next) => {
    var productId = req.params.id;
    var userId = req.body.userId;
    var qty = req.body.qty;
        
    Cart.findOne({'userId': userId, 'productId' : productId }, (err,cart) => {
        if(err) return res.status(404).json({ message : 'Cart error'});
        if(cart) {
            const oldqty = parseInt(cart.qty);
            const newqty = oldqty + qty;
            Cart.findOneAndUpdate({'userId': userId, 'productId': productId }, {'qty': newqty} , {upsert:true}, function(err, doc){
                if (err) return res.status(404).json({ error: err });
                return res.status(200).json({message: doc});
            });
        } else {
            Products.findById(productId, (err, doc) => {
                if(err) res.status(404).json({err : err});
                var newCart = new Cart({
                    userId : userId,
                    productId : productId,
                    name : doc.name,
                    img : doc.img,
                    cate: doc.cate,
                    des : doc.des,
                    price : doc.price,                    
                    qty : qty
                });
                return newCart.save(function(err) {
                    if (err) {
                        return res.status(404).json({message: ['Add to cart loi']});
                    }
                    else {
                        return res.status(200).json({message: ['add thanh cong']})
                    }
                });
            })            
        }        
    });     
}

module.exports.postCart = (req, res, next) => {
    const userId = req.body.userId;
    Cart.find({'userId': userId}, (err, cart) => {
        if(err) return res.status(404).json({err: err});
        return res.status(200).json({
            cart : cart
        })
    })
}

module.exports.removeProductId = (req, res, next) => {
    var cartId = req.params.id;
    Cart.findOneAndDelete({_id : cartId}, err => {
        if(err) {
            console.log(err);
            return res.status(404).json({err: err});
        }
        return res.status(200).json({message : 'ok'});
    })
}

module.exports.contact = (req, res, next) => {
    req.checkBody('name', ' Invalid Username').notEmpty().isLength({max: 50});
    req.checkBody('email', ' Invalid Email').notEmpty().isEmail();
    req.checkBody('subject', ' Invalid Subject').notEmpty().isLength({max: 500});
    req.checkBody('message', ' Invalid Message').notEmpty().isLength({max: 5000});
    var errors = req.validationErrors();
    if(errors) {   
        var messages = [];       
        errors.forEach(function(error) {
            messages.push(error.msg);
        });
        return res.status(404).json({"err": messages});
    }
    var contact = new Contact({
        name : req.body.name,
        email : req.body.email,
        subject : req.body.subject,
        message : req.body.message,
        time : Date.now()
    })    
    return contact.save(function (err) {
        if (err) return res.status(404).json({err: err});
        return res.status(200).json({mess: 'success'})        
    });        
}

module.exports.getCate = (req, res, next) => {
    const cateId = req.params.id;
    // return Categories.findById(cateId, (err, doc) => {
    //     if(err) {
    //         return res.status(404).json({
    //             err : err
    //         })
    //     }
    // {'cate': doc.name}
        return Products.find({}, (err, doc) => {
            if(err) {
                return res.status(404).json({err : err});
            }
            return res.status(200).json({
                products : doc
            })
        })
    // })
}

module.exports.changeQty = (req, res, next) => {
    const productId = req.params.id;
    const userId = req.body.userId;
    const qty = req.body.qty;

    Cart.findOneAndUpdate({'userId' : userId, 'productId' : productId }, {'qty' : qty}, {new: true} ,(err, doc) => {
        if(err) {
            console.log(err);
            return res.status(500).send({
                err: err
            })
        }
        return res.status(200).send({
            message : doc
        })
    })
}

module.exports.search = (req, res, next) => {
    var q = req.query.q;
    console.log(q)
    
    const regex = new RegExp(escapeRegex(q), 'gi');

    Products.find({name : regex},(err, doc) => {
        if(err) {
            return res.status(500).json({err : err});
        }
        return res.status(200).json({products : doc});
    })
    // var matchedUsers = users.filter(function(user){
    //     return user.name.indexOf(q) !== -1;
    // });
    // res.render('users/index', {
    //     users: matchedUsers
    // });
}

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};