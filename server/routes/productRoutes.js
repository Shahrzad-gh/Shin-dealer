const { Router } = require('express');
//const { requireAuth } = require('../middlewares/authMiddleware');
const productController = require('../controllers/productController');


const router = Router();

router.post('/addproduct', productController.addProduct_post);
//router.get('/addproduct', productController.addProduct_get);


module.exports = router;