const { Router } = require('express');
const { requireAuth, checkUser, adminMiddleware } = require('../middlewares/commonMiddleware');
const categoryController = require('../controllers/categoryController');


const router = Router();

router.post('/addcategory', requireAuth, checkUser, adminMiddleware, categoryController.addCategory_post);
router.get('/getcategories', categoryController.getCategories_get);
// categoryRouter.get('/category/read', categoryController.readCategory_get);
// categoryRouter.post('/category/update', categoryController.updateCategory_post);
// categoryRouter.post('/category/delete', categoryController.deleteCategory_post);

module.exports = router;