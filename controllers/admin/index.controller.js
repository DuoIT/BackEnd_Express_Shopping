const Product = require('../../models/product.model');
const Category = require('../../models/category.model')


module.exports.postProduct = (req, res, next) => {
    console.log(req.file);
    const name = req.body.name;
    const price = req.body.price;
    const cate = req.body.cate;
    const des = req.body.des;
    const quantity = req.body.quantity;
    const img = 'http://localhost:3000/uploads/' + req.file.filename;
    
    const newProduct = new Product({
        name: name, price: price, cate: cate, des: des, quantity: quantity, img: img
    })
    console.log(newProduct);
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