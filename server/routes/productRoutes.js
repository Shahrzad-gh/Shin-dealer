const { Router } = require('express');
//const { requireAuth } = require('../middlewares/authMiddleware');
const productController = require('../controllers/productController');
const multer = require('multer');
const nanoid = require('nanoid');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), 'uploads'))
  },
  filename: function (req, file, cb) {
    cb(null, nanoid.nanoid() + '_' + file.originalname)
  }
})

const upload = multer({ storage })

const router = Router();

router.post('/addproduct', upload.array('pictures'), productController.addProduct_post);
//router.get('/addproduct', productController.addProduct_get);


module.exports = router;