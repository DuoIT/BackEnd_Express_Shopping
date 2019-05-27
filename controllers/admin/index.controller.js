const Product = require('../../models/product.model');
const Category = require('../../models/category.model')
const Contact = require('../../models/contact.model')


module.exports.postProduct = (req, res, next) => {
    const name = req.body.name;
    const price = req.body.price;
    const cate = req.body.cate;
    const des = req.body.des;
    const quantity = req.body.quantity;
    const productId = req.body.productId;
    const img = 'http://localhost:3000/uploads/' + req.file.filename;
    console.log(req.body);
    console.log(productId === '');
    if(productId === '') {
        const newProduct = new Product({
            name: name, price: price, cate: cate, des: des, quantity: quantity, img: img
        })
        return newProduct.save()
        .then(result => {
            // console.log(result);
            return res.status(200).json({
                Product : result
            })
        })
        .catch(err => {
            return res.status(500).json({err :err})
        })
    } else {
        return Product.findByIdAndUpdate(productId, {
            name : name,
            price: price,
            cate: cate,
            des : des,
            quantity: quantity,
            img: img
        }, {new: true} ,(err, doc) => {
            if(err) {
                // console.log(err);
                return res.status(500).json({
                    err: err
                })
            }
            console.log('update');
            return res.status(200).json({Product: doc});
        })
    }
    
}

module.exports.postCategory = (req, res, next) => {
    const name = req.body.name;    
    Category.findOne({'name': name}, (err, doc) =>  {
        if(err) {
            return res.status(500).json({err: err});
        }
        if(doc) {
            return res.status(500).json({err: 'Bi trung'});            
        } else {
            const cate = new Category({
                name: name
            })
            cate.save(err => {
                if(err) {
                    return res.status(500).json({err :err});
                }
                return res.status(200).json({cate: cate});
            })
        }
    })
}

module.exports.removeProduct = (req, res, next) => {
    const id = req.params.id;
    console.log('remove product: '+ id);
    return Product.findByIdAndDelete({_id : id}, (err, todo) => {
        if(!err) {
            console.log('delete');
            return res.status(200).json({message : todo._id});            
        } else {
            console.log(err);
            return res.status(404).json({err: err});
        }        
    })   
}

module.exports.postCate = (req, res, next) => {
    const name = req.body.name;
    const cateId = req.body.cateId;
    console.log(req.body);
    if(cateId === '') {
        const newCate = new Category({
            name: name
        })
        return newCate.save()
        .then(result => {
            // console.log(result);
            return res.status(200).json({
                cate : result
            })
        })
        .catch(err => {
            console.log(err);
            return res.status(500).json({err :err})
        })
    } else {
        return Category.findByIdAndUpdate(cateId, {
            name : name
        }, {new: true} ,(err, doc) => {
            if(err) {
                // console.log(err);
                return res.status(500).json({
                    err: err
                })
            }
            console.log('update');
            return res.status(200).json({cate: doc});
        })
    }
    
}

module.exports.removeCate = (req, res, next) => {
    const id = req.params.id;
    console.log('remove category: '+ id);
    return Category.findByIdAndDelete({_id : id}, (err, todo) => {
        if(!err) {
            console.log('delete');
            return res.status(200).json({cate : todo});            
        } else {
            console.log(err);
            return res.status(404).json({err: err});
        }        
    })   
}

module.exports.getContact = (req, res, next) => {
    return Contact.find({}, (err, doc) => {
        if(err) return res.status(500).json({err: err});
        return res.status(200).json({contacts: doc});
    })
}

module.exports.deleteContact = (req, res, next) => {
    const id = req.params.id;
    return Contact.findByIdAndDelete(id, (err, doc) => {
        if(err) return res.status(500).json({err: err});
        return res.status(200).json({contact: doc});
    })
}

module.exports.searchContact = (req, res, next) => {
    var q = req.query.q;
    console.log(q)
    
    const regex = new RegExp(escapeRegex(q), 'gi');

    Contact.find({subject : regex},(err, doc) => {
        if(err) {
            return res.status(500).json({err : err});
        }
        return res.status(200).json({contacts : doc});
    })
}

function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};