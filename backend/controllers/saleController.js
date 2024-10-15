const Sale = require('../models/saleModel');

exports.createSale = async (req, res) => {
  const { user, products, total, paymentReference, paymentEntity } = req.body;
  try {
    const sale = await Sale.create({
      user,
      products,
      total,
      paymentReference,
      paymentEntity,
    });
    res.status(201).json({ message: 'Sale created successfully', sale });
  } catch (error) {
    res.status(500).json({ message: 'Error creating sale', error });
  }
};

exports.getAllSales = async (req, res) => {
  try {
    const sales = await Sale.find().populate('user products.product');
    res.status(200).json({ sales });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sales', error });
  }
};

exports.getSaleById = async (req, res) => {
  const { id } = req.params;
  try {
    const sale = await Sale.findById(id).populate('user products.product');
    if (!sale) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    res.status(200).json({ sale });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sale', error });
  }
};

exports.updateSale = async (req, res) => {
  const { id } = req.params;
  try {
    const sale = await Sale.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ message: 'Sale updated successfully', sale });
  } catch (error) {
    res.status(500).json({ message: 'Error updating sale', error });
  }
};

exports.deleteSale = async (req, res) => {
  const { id } = req.params;
  try {
    await Sale.findByIdAndDelete(id);
    res.status(200).json({ message: 'Sale deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting sale', error });
  }
};
