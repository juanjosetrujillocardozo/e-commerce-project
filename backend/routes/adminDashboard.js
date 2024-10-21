const express = require('express');
const router = express.Router();
const Order = require('../models/orderModel');
const User = require('../models/userModel');
const Product = require('../models/productModel');

router.get('/dashboard', async (req, res) => {
  try {
    // Total de ventas
    const totalSales = await Order.aggregate([{ $group: { _id: null, total: { $sum: "$totalAmount" } } }]);

    // Total de usuarios y productos
    const totalUsers = await User.countDocuments({});
    const totalProducts = await Product.countDocuments({});

    // Ventas por categoría
    const salesByCategory = await Order.aggregate([
      { $unwind: "$items" },
      {
        $lookup: {
          from: "products",
          localField: "items.productId",
          foreignField: "_id",
          as: "productDetails"
        }
      },
      { $unwind: "$productDetails" },
      {
        $group: {
          _id: "$productDetails.category",
          totalSales: { $sum: "$totalAmount" }
        }
      }
    ]);

    // Ventas por mes
    const salesByMonth = await Order.aggregate([
      {
        $group: {
          _id: { $month: "$createdAt" },
          totalSales: { $sum: "$totalAmount" }
        }
      },
      { $sort: { "_id": 1 } }
    ]);

    // Respuesta JSON con todas las estadísticas
    res.json({
      totalSales: totalSales[0]?.total || 0,
      totalUsers,
      totalProducts,
      salesByCategory,
      salesByMonth
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching dashboard data' });
  }
});

module.exports = router;
