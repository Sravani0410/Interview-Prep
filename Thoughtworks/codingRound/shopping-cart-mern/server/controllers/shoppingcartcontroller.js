const Order = require('../models/Order');
const Product = require('../models/Product');
const Customer = require('../models/Customer');

const calculateDiscountedPrice = (price, discountCode) => {
  let discount = 0;
  if (discountCode.startsWith('DIS_10')) {
    discount = 0.1;
  } else if (discountCode.startsWith('DIS_15')) {
    discount = 0.15;
  }
  return price * (1 - discount);
};

const calculateLoyaltyPoints = (price, discountCode) => {
  let points = 0.2 * price;
  if (discountCode.startsWith('DIS_10')) {
    points = 0.1 * price;
  } else if (discountCode.startsWith('DIS_15')) {
    points = 0.06 * price;
  }
  return points;
};

const checkout = async (req, res) => {
  const { customerId, productIds } = req.body;

  const products = await Product.find({ _id: { $in: productIds } });
  let totalPrice = 0;
  let loyaltyPoints = 0;

  products.forEach(product => {
    totalPrice += calculateDiscountedPrice(product.price, product.discountCode);
    loyaltyPoints += calculateLoyaltyPoints(product.price, product.discountCode);
  });

  const order = new Order({
    totalPrice,
    loyaltyPoints,
    customerId,
    products: productIds
  });

  await order.save();
  res.json(order);
};

module.exports = { checkout };
