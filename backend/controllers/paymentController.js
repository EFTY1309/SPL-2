const SSLCommerzPayment = require('sslcommerz-lts');
const { Types: { ObjectId } } = require('mongoose');
const User = require('../models/User');
const RegisteredUser = require('../models/RegisteredUser');
const { sendEnrollmentEmail } = require('../utils/email');

let transactions = {};

exports.createOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    const trans_id = new ObjectId().toString();
    const { total_amount, user: userDetails, course } = req.body;

    const data = {
      total_amount,
      currency: 'BDT',
      tran_id: trans_id,
      success_url: `http://localhost:4003/api/payment/success/${trans_id}`,
      fail_url: 'http://localhost:4003/api/payment/fail',
      cancel_url: 'http://localhost:4003/api/payment/cancel',
      ipn_url: 'http://localhost:4003/api/payment/ipn',
      shipping_method: 'Courier',
      product_name: 'Computer',
      product_category: 'Electronic',
      product_profile: 'general',
      cus_name: userDetails.name,
      cus_email: userDetails.email,
      cus_add1: 'Dhaka',
      cus_add2: 'Dhaka',
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: '1000',
      cus_country: 'Bangladesh',
      cus_phone: '01711111111',
      cus_fax: '01711111111',
      ship_name: userDetails.name,
      ship_add1: 'Dhaka',
      ship_add2: 'Dhaka',
      ship_city: 'Dhaka',
      ship_state: 'Dhaka',
      ship_postcode: '1000',
      ship_country: 'Bangladesh',
    };

    const sslcz = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASSWORD, process.env.IS_LIVE === 'true');
    const apiResponse = await sslcz.init(data);

    transactions[trans_id] = { total_amount, userDetails, course };

    return res.status(200).json({ success: true, url: apiResponse.GatewayPageURL });
  } catch (error) {
    console.error('Error creating order:', error);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
};

exports.handlePaymentSuccess = async (req, res) => {
  try {
    const transactionId = req.params.tran_id;
    const paymentData = transactions[transactionId];
    console.log("Transaction ID:", transactionId);
    console.log("Payment Data:", paymentData);

    if (!paymentData) {
      return res.status(400).json({ success: false, error: "Invalid transaction ID or payment data not found" });
    }

    const { userDetails, course } = paymentData;

    let courses = userDetails.courses || [];
    if (course && !courses.includes(course)) {
      courses.push(course);
    }

    const registeredUser = new RegisteredUser({
      name: userDetails.name,
      email: userDetails.email,
      category: userDetails.category,
      courses: courses,
      tran_id: transactionId
    });

    await registeredUser.save();

    sendEnrollmentEmail(userDetails.name, userDetails.email, courses);

    delete transactions[transactionId];

    res.redirect(`http://localhost:5173/payment-success?tran_id=${transactionId}`);
  } catch (error) {
    console.error("Error handling payment success:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};
