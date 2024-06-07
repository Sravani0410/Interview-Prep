const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  price: { type: Number, required: true },
  discountCode: { type: String, required: true },
  name: { type: String, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);
