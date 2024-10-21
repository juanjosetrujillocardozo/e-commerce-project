const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Relación con el usuario
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }, // Relación con el producto
      quantity: { type: Number, required: true }, // Cantidad del producto
      price: { type: Number, required: true }, // Precio en el momento de la compra
    }
  ],
  shippingAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true }
  },
  paymentMethod: { type: String, required: true }, // Método de pago (ej. tarjeta, PayPal, etc.)
  paymentResult: {
    id: { type: String }, // ID del pago
    status: { type: String }, // Estado del pago
    update_time: { type: String }, // Fecha de actualización del pago
    email_address: { type: String } // Email del pagador (si es necesario)
  },
  totalAmount: { type: Number, required: true }, // Monto total de la orden
  taxPrice: { type: Number, default: 0.0 }, // Impuestos
  shippingPrice: { type: Number, default: 0.0 }, // Costo de envío
  totalPrice: { type: Number, required: true }, // Precio total con impuestos y envío
  status: { type: String, default: 'Pending' }, // Estado de la orden
  isPaid: { type: Boolean, default: false }, // Si la orden fue pagada
  paidAt: { type: Date }, // Fecha de pago
  isDelivered: { type: Boolean, default: false }, // Si la orden fue entregada
  deliveredAt: { type: Date }, // Fecha de entrega
  createdAt: { type: Date, default: Date.now }, // Fecha de creación de la orden
});

module.exports = mongoose.model('Order', orderSchema);
