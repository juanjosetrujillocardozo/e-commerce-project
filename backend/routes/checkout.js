const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');

router.post('/checkout', async (req, res) => {
  const { userId, cartItems, totalAmount } = req.body;

  const newOrder = new Order({
    userId,
    items: cartItems,
    totalAmount,
    status: 'Pending',
  });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Error processing order' });
  }
});

module.exports = router;
