const express = require('express');
const {
  createSale,
  getAllSales,
  getSaleById,
  updateSale,
  deleteSale,
} = require('../controllers/saleController');

const router = express.Router();

router.route('/').get(getAllSales).post(createSale);
router.route('/:id').get(getSaleById).patch(updateSale).delete(deleteSale);

module.exports = router;
