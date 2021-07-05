const { Router } = require('express');
const { checkUser } = require('../middlewares/commonMiddleware');
const orderController = require('../controllers/orderController');

const router = Router();

router.post('/setOrder', checkUser, orderController.setOrder_post);
router.get('/getOrder', checkUser, orderController.getOrder_get);

module.exports = router;