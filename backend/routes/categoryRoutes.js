const express = require('express');
const {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');

const router = express.Router();

router.route('/').get(getAllCategories).post(createCategory);
router.route('/:id').patch(updateCategory).delete(deleteCategory);

module.exports = router;
