const { Router } = require('express');
const { requireAuth, checkUser, adminMiddleware } = require('../middlewares/commonMiddleware');
const productController = require('../controllers/productController');

const upload = require('../utils/multer');
const router = Router();
router.post('/addproduct', requireAuth, checkUser, adminMiddleware, upload.single('pictures'), productController.addProduct_post);
router.get('/getproductById/:id', productController.getProductById_get);
router.get('/getallproducts', productController.getAllProducts_get);
router.get('/getproductsByCategory', productController.getProductsByCategory_get);
router.get('/getproductsByCategoryASD', productController.getproductsByCategoryASD_get);
router.get('/getproductsByCategoryDSD', productController.getproductsByCategoryDSD_get);


module.exports = router;