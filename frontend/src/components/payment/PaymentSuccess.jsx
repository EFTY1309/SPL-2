import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentSuccess.css';

const PaymentSuccess = () => {
  const location = useLocation();
  const [tranId, setTranId] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tranId = queryParams.get('tran_id');
    setTranId(tranId);
  }, [location]);

  return (
    <div className="payment-success-container">
      <h1>Payment Successful</h1>
      <p>Your transaction was successful!</p>
      <p>Transaction ID: {tranId}</p>
    </div>
  );
};

export default PaymentSuccess;
