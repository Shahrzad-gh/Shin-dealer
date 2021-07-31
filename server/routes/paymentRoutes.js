const { Router } = require('express');
const { requireAuth, checkUser } = require('../middlewares/commonMiddleware');
const paymentController = require('../controllers/paymentController');


const router = Router();

router.post('/setpayment', checkUser, paymentController.setPayment);

module.exports = router;