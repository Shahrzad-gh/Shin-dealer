const { Router } = require('express');
//const { requireAuth } = require('../middlewares/authMiddleware');
const productController = require('../controllers/productController');
const multer = require('multer');
const upload = multer({destination: 'uploads/'})
const router = Router();

router.post('/addproduct', upload.single('productPicture'), productController.addProduct_post);
//router.get('/addproduct', productController.addProduct_get);


module.exports = router;