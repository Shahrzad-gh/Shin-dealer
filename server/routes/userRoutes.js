const { Router } = require('express');
//const { requireAuth } = require('../middlewares/authMiddleware');
const userController = require('../controllers/userController');

//const upload = require('../utils/multer');
const router = Router();
router.get('/getUserById', userController.getUserById_get);
router.get('/getallusers', userController.getAllUsers_get);

module.exports = router;