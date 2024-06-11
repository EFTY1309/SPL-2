const express = require('express');
const router = express.Router();
const { getDuePayments, getPaymentHistory, payNow, validatePayment } = require('../controllers/paymentController');

router.get('/due', getDuePayments);
router.get('/history', getPaymentHistory);
router.post('/pay/:id', payNow);
router.post('/validate', validatePayment);

module.exports = router;
