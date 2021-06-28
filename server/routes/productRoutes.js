const { Router } = require('express');
const { requireAuth, checkUser } = require('../middlewares/commonMiddleware');
const productController = require('../controllers/productController');

const upload = require('../utils/multer');
const router = Router();
router.post('/addproduct', checkUser, upload.single('pictures'), productController.addProduct_post);
router.get('/getproductById', productController.getProductById_get);
router.get('/getallproducts', productController.getAllProducts_get);


module.exports = router;