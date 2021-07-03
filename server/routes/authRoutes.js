const { Router } = require('express');
const authController = require('../controllers/authController');
const { requireAuth, checkUser, adminMiddleware } = require('../middlewares/commonMiddleware');

const router = Router();
router.get('/', authController.landing_get);
router.get('/signup',authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/signin', requireAuth, checkUser, authController.login_get);
router.post('/signin', authController.login_post);
router.get('/logout', authController.logout_get);

router.get("/auth", authController.loggedIn_get);
router.get("/role", authController.getRole_get);

module.exports = router;