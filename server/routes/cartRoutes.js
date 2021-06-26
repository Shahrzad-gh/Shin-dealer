const { Router } = require('express');
//const { requireAuth } = require('../middlewares/authMiddleware');
const cartController = require('../controllers/cartController');


const router = Router();

router.post('/addtocart', cartController.addItemToCart_post);
router.get('/getusercartItems', cartController.getUserCartItems_get);

module.exports = router;