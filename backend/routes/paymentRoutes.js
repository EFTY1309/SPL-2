const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/order', authMiddleware, paymentController.createOrder);
router.post('/payment/success/:tran_id', paymentController.handlePaymentSuccess);

module.exports = router;
