const { Router } = require('express');
const { requireAuth, checkUser } = require('../middlewares/commonMiddleware');
const cartController = require('../controllers/cartController');


const router = Router();

router.post('/addtocart', checkUser, cartController.addItemToCart_post);
router.get('/getusercartItems', checkUser, cartController.getUserCartItems_get);

module.exports = router;