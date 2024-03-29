const { Router } = require('express');
const { checkUser, requireAuth } = require('../middlewares/commonMiddleware');
const orderController = require('../controllers/orderController');

const router = Router();

router.post('/setOrder', requireAuth ,checkUser, orderController.setOrder_post);
router.get('/getOrder/:id', checkUser, orderController.getOrder_get);
router.get('/getAllOrders', checkUser, orderController.getAllOrders_get);
router.get('/getOrderstatus', checkUser, orderController.getOrderStatus_get);
router.put('/updateOrderStatus', checkUser, orderController.updateOrderStatus_put);
router.get('/getuserordersbyuserid', checkUser, orderController.getUserOrdersByUserId_get);

module.exports = router;