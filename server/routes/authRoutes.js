const { Router } = require('express');
const authController = require('../controllers/authController');
const { requireAuth } = require('../middlewares/authMiddleware');

const router = Router();
router.get('/', authController.landing_get);
router.get('/signup',authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/signin', authController.login_get);
router.post('/signin', authController.login_post);
router.get('/logout', authController.logout_get);

router.get("/auth", requireAuth, (req, res) => {
  res.json(req.user);
});

module.exports = router;