const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multerMiddleware = require('../middlewares/multerMiddleware');

router.post('/addproducts', multerMiddleware.single('image'), productController.addProductsController);

module.exports = router;