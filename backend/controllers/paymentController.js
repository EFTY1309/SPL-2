const Payment = require('../models/Payment');
const { initiatePayment, validatePayment } = require('../utils/sslcommerz');

// Get all due payments
exports.getDuePayments = async (req, res) => {
  try {
    const payments = await Payment.find({ status: 'due' });
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get payment history
exports.getPaymentHistory = async (req, res) => {
  try {
    const payments = await Payment.find({ status: 'paid' });
    res.status(200).json(payments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Initiate payment
exports.payNow = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }

    const paymentData = await initiatePayment(payment);
    res.status(200).json(paymentData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Validate payment
exports.validatePayment = async (req, res) => {
  try {
    const validationResponse = await validatePayment(req.body);

    if (validationResponse.status === 'VALID') {
      const payment = await Payment.findById(validationResponse.payment_id);
      payment.status = 'paid';
      payment.paidDate = new Date();
      await payment.save();

      res.status(200).json({ message: 'Payment successful' });
    } else {
      res.status(400).json({ message: 'Payment validation failed' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
