var express = require('express');
var router = express.Router();
var controller = require('../../controllers/admin/index.controller');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        // cb(null, new Date().toISOString() + file.originalname);
        cb(null, Date.now().toString() + "-" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
};

const upload = multer({storage: storage, fileFilter: fileFilter });

router.post('/product', upload.single('img'), controller.postProduct );
router.post('/cate', controller.postCate );
router.post('/category', controller.postCategory);
router.delete('/delete/product/:id', controller.removeProduct);
router.delete('/delete/cate/:id', controller.removeCate);

module.exports = router;