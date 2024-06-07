import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [customerId, setCustomerId] = useState('');
  const [productIds, setProductIds] = useState('');
  const [order, setOrder] = useState(null);

  const handleCheckout = async () => {
    const response = await axios.post('http://localhost:5000/api/shoppingCart/checkout', {
      customerId,
      productIds: productIds.split(','),
    });
    setOrder(response.data);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <input
        type="text"
        placeholder="Customer ID"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Product IDs (comma separated)"
        value={productIds}
        onChange={(e) => setProductIds(e.target.value)}
      />
      <button onClick={handleCheckout}>Checkout</button>
      {order && (
        <div>
          <h2>Order Summary</h2>
          <p>Total Price: {order.totalPrice}</p>
          <p>Loyalty Points: {order.loyaltyPoints}</p>
        </div>
      )}
    </div>
  );
}

export default App;
