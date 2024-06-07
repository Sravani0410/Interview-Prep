const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const shoppingCartRoutes = require('./routes/shoppingCartRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/shoppingCart', shoppingCartRoutes);

mongoose.connect('mongodb://localhost:27017/shopping-cart', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
