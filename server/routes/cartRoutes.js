const { Router } = require('express');
const { requireAuth, checkUser } = require('../middlewares/commonMiddleware');
const cartController = require('../controllers/cartController');


const router = Router();

router.post('/addtocart', checkUser, cartController.addItemToCart_post);
router.get('/getusercartItems', checkUser, cartController.getUserCartItems_get);
router.post('/removecartItem', checkUser, cartController.removeCartItem_post);

module.exports = router;