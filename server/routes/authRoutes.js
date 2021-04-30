const { Router } = require('express');
const authController = require('../controllers/authController');
const { requireAuth } = require('../middlewares/authMiddleware');

const router = Router();
//router.post('/', authController.landing_post);
router.get('/signup',authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/signin', authController.login_get);
router.post('/signin', authController.login_post);
router.get('/logout', authController.logout_get);


module.exports = router;