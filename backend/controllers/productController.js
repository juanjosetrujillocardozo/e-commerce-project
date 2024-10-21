const Product = require('../models/productModel');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos', error });
  }
};

exports.createProduct = async (req, res) => {
  const { name, category, price, description, images } = req.body;
  try {
    const product = await Product.create({ name, category, price, description, images });
    res.status(201).json({ message: 'Producto creado exitosamente', product });
  } catch (error) {
    res.status(500).json({ message: 'Error al crear producto', error });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: 'Producto actualizado exitosamente', product });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar producto', error });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Producto eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar producto', error });
  }
};
