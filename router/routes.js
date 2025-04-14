const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const multerMiddleware = require('../middlewares/multerMiddleware');

router.post('/addproducts', multerMiddleware.single('image'), productController.addProductsController);
router.get('/allproducts', productController.getAllProductsController);
router.put('/updateproduct/:id', productController.updateProductController);
router.delete('/deleteproduct/:id', productController.deleteProductController); // New route

module.exports = router;