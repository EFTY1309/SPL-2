const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

app.get('/', (req, res) => {
  res.send('Express app is running');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);

const port = process.env.PORT || 4003;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
