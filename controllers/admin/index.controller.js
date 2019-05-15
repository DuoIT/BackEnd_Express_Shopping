const Products = require('../../models/product.model');



module.exports.postProduct = (req, res, next) => {
    console.log(req.file);
    const name = req.body.name;
    const price = req.body.price;
    const cate = req.body.cate;
    const des = req.body.des;
    const quantity = req.body.quantity;
    const img = 'http://localhost:3000/'+req.file.path;
    
    const newProduct = new Products({
        name: name, price: price, cate: cate, des: des, quantity: quantity, img: img
    })
    console.log(newProduct);
    return newProduct.save()
    .then(result => {
        // console.log(result);
        return res.status(200).json({
            Product : newProduct
        })
    })
    .catch(err => {
        return res.status(500).json({err :err})
    })
}

