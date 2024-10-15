const express = require('express');
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

const router = express.Router();

router.route('/').get(getAllProducts).post(createProduct);
router.route('/:id').patch(updateProduct).delete(deleteProduct);

module.exports = router;
