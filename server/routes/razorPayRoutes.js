const { Router } = require('express');
const { requireAuth, checkUser, adminMiddleware } = require('../middlewares/commonMiddleware');

const router = Router();




module.exports = router;