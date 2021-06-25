const { Router } = require('express');
const userController = require('../controllers/userController')

const router = Router();
router.get('/getUserById', userController.getUserById_get);
router.get('/getallusers', userController.getAllUsers_get);

module.exports = router;