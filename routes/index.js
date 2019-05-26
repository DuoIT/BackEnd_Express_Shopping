var express = require('express');
var router = express.Router();
var controller = require('../controllers/index.controller');

/* GET home page. */
router.get('/', controller.getHome);

//Detail
router.get('/detail/:id', controller.detail);

// router.get('/add-to-cart/:id', controller.addToCart);

router.post('/add-to-cart/:id', controller.postAddToCart);

router.post('/cart', controller.postCart);
router.post('/cart/product/:id', controller.changeQty);

router.delete('/cart/remove/product/:id', controller.removeProductId);
router.delete('/cart/remove/all/:id', controller.removeAll );

router.post('/contact', controller.contact);

router.get('/cates/:id', controller.getCate);

router.get('/search', controller.search);
router.get('/search/cate', controller.searchCate);

router.post('/cart/disCountCode', controller.disCountCode);

router.post('/checkout', controller.checkOut);

module.exports = router;
