const { Router } = require('express');
const { checkUser } = require('../middlewares/commonMiddleware');
const orderController = require('../controllers/orderController');

const router = Router();

router.post('/setOrder', checkUser, orderController.setOrder_post);
router.get('/getOrder', checkUser, orderController.getOrder_get);
router.get('/getAllOrders', checkUser, orderController.getAllOrders_get);
router.get('/getpaymentstatus', checkUser, orderController.getPaymentStatus_get);

module.exports = router;