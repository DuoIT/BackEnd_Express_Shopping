var Categories = require('../models/category.model');
var Products = require('../models/product.model');
var Cart = require('../models/cart.model')
ObjectId = require('mongodb').ObjectID;

module.exports.getHome = (req, res, next) => {
    Products.find()
    .select('name img cate des price quantity')
    .exec()
    .then(product =>{
        Categories.find()
        .then(cate => {
            const cates = cate.map(doc =>{
                        return {
                            id: doc._id,
                            name: doc.name,
                            request: {
                                type: 'GET',
                                url:'http://localhost:3000'
                            }
                        }});
            const products = product.map(doc => {
                return {
                    id: doc._id,
                    name: doc.name,
                    img: doc.img,
                    cate: doc.cate,
                    des: doc.des,
                    price: doc.price,
                    quantity: doc.quantity,
                    request: {
                        type: 'GET',
                        url:'http://localhost:3000'
                    }
                }
            });

            return res.status(200).json({
                cates: cates,
                products: products
            });
        })
        
    })
    .catch(err => {
            console.log(err);
            res.status(500).json({
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
        res.status(200).json({product: data})
    })
    .catch(err => {
        res.status(404).json({err: err});
    })
};

module.exports.postAddToCart = (req, res, next) => {
    var productId = req.params.id;
    var userId = req.body.userId;
    var total = req.body.total;
    // Cart.findOneAndUpdate({'userId': userId, 'productId': productId },{'total': total }, {new: true}, (err, doc) => {
    //     if (err) {
    //         console.log("Something wrong when updating data!");
    //         return res.json({message : err});
    //     }
    //     console.log(doc);
    //     return res.json({message: doc});
    // });
    Cart.findOne({'userId': userId, 'productId' : productId }, (err,cart) => {
        if(err) return res.status(404).json({ message : 'Cart error'});
        if(cart) {
            const oldTotal = parseInt(cart.total);
            const newTotal = oldTotal + total;
            Cart.findOneAndUpdate({'userId': userId, 'productId': productId }, {'total': newTotal} , {upsert:true}, function(err, doc){
                if (err) return res.status(404).json({ error: err });
                return res.status(200).json({message: doc});
            });
        } else {
            Products.findById(productId, (err, doc) => {
                if(err) res.status(404).send({err : err});
                var newCart = new Cart({
                    userId : userId,
                    productId : productId,
                    name : doc.name,
                    img : doc.img,
                    cate: doc.cate,
                    des : doc.des,
                    price : doc.price,                    
                    total : total
                });
                newCart.save(function(err) {
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
        res.status(200).send({
            cart : cart
        })
    })
}

module.exports.postProductId = (req, res, next) => {
    var productId = req.params.id;
    Products.findById(productId)
    .then(product => {
        return res.status(200).send({
            product : product
        })
    })
    .catch(err => {
        return res.send(404).send({
            err : err
        })
    })
}