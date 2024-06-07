const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  totalPrice: { type: Number, required: true },
  loyaltyPoints: { type: Number, required: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }]
});

module.exports = mongoose.model('Order', OrderSchema);
