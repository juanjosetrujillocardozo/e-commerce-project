const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const adminMiddleware = require('./middleware/adminMiddleware'); // Middleware admin

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Importar rutas
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const saleRoutes = require('./routes/saleRoutes');
const adminDashboardRoutes = require('./routes/adminDashboard');

// Rutas públicas
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use('/api/v1/sales', saleRoutes);

// Rutas protegidas para administradores
app.use('/admin/products', adminMiddleware, productRoutes);
app.use('/admin/categories', adminMiddleware, categoryRoutes);
app.use('/admin/sales', adminMiddleware, saleRoutes);
app.use('/admin/dashboard', adminMiddleware, adminDashboardRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
