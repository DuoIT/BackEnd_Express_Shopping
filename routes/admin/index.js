var express = require('express');
var router = express.Router();
var controller = require('../../controllers/admin/index.controller');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const upload = multer({storage: storage });

router.post('/products', upload.single('img'), controller.postProduct );

module.exports = router;