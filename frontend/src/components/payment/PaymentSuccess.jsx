import React from 'react';
import './PaymentSuccess.css';

const PaymentSuccess = () => {
  return (
    <div className="success-page">
      <div className="success-container">
        <h1>Payment Successful</h1>
        <p>Thank you for your payment. Your transaction has been completed successfully.</p>
        <p>You can check your payment history in the Payment Overview section.</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;