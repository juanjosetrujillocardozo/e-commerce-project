const express = require('express');
const { login, signUp, getAllUsers } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware para proteger rutas
const router = express.Router();

router.post('/login', login);
router.post('/sign-up', signUp);

// Ruta para listar usuarios (protegida)
router.get('/users', authMiddleware, getAllUsers);

module.exports = router;
