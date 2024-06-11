const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const initiatePayment = async (payment) => {
  const data = {
    store_id: process.env.SSLCOMMERZ_STORE_ID,
    store_passwd: process.env.SSLCOMMERZ_STORE_PASSWORD,
    total_amount: payment.amount,
    currency: 'EUR',
    tran_id: payment._id.toString(),
    success_url: 'http://localhost:5000/api/payments/validate',
    fail_url: 'http://localhost:5000/api/payments/validate',
    cancel_url: 'http://localhost:5000/api/payments/validate',
    ipn_url: 'http://localhost:5000/api/payments/validate',
    product_profile: 'general',
    product_name: payment.course,
    cus_name: 'Customer Name',
    cus_email: 'customer@example.com',
    cus_add1: 'Dhaka',
    cus_city: 'Dhaka',
    cus_country: 'Bangladesh',
    cus_phone: '01700000000',
  };

  const response = await axios.post('https://sandbox.sslcommerz.com/gwprocess/v4/api.php', data);
  return response.data;
};

const validatePayment = async (data) => {
  const validationData = {
    val_id: data.val_id,
    store_id: process.env.SSLCOMMERZ_STORE_ID,
    store_passwd: process.env.SSLCOMMERZ_STORE_PASSWORD,
  };

  const response = await axios.post('https://sandbox.sslcommerz.com/validator/api/validationserverAPI.php', validationData);
  return response.data;
};

module.exports = { initiatePayment, validatePayment };
