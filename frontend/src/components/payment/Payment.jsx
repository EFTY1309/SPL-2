import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Payment.css';

const Payment = () => {
  const [duePayments, setDuePayments] = useState([]);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDuePayments();
    fetchPaymentHistory();
  }, []);

  const fetchDuePayments = async () => {
    try {
      const response = await axios.get('/api/payments/due');
      if (Array.isArray(response.data)) {
        setDuePayments(response.data);
      } else {
        setError('Unexpected response format for due payments');
      }
    } catch (error) {
      setError('Error fetching due payments');
      console.error(error);
    }
  };

  const fetchPaymentHistory = async () => {
    try {
      const response = await axios.get('/api/payments/history');
      if (Array.isArray(response.data)) {
        setPaymentHistory(response.data);
      } else {
        setError('Unexpected response format for payment history');
      }
    } catch (error) {
      setError('Error fetching payment history');
      console.error(error);
    }
  };

  const handlePayNow = async (paymentId) => {
    try {
      const response = await axios.post(`/api/payments/pay/${paymentId}`);
      window.location.href = response.data.GatewayPageURL;
    } catch (error) {
      setError('Error initiating payment');
      console.error(error);
    }
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="payment-page">
      <div className="payment-container">
        <h1>Payment Overview</h1>
        <div className="payment-section">
          <h2>Due Payments</h2>
          {duePayments.length > 0 ? (
            <ul>
              {duePayments.map((payment) => (
                <li key={payment._id}>
                  <div className="payment-info">
                    <span className="course-name">{payment.course}</span>
                    <span className="amount">€{payment.amount}</span>
                    <span className="due-date">Due: {new Date(payment.dueDate).toLocaleDateString()}</span>
                  </div>
                  <button className="pay-now-btn" onClick={() => handlePayNow(payment._id)}>
                    Pay Now
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No due payments found.</p>
          )}
        </div>
        <div className="payment-section">
          <h2>Payment History</h2>
          {paymentHistory.length > 0 ? (
            <ul>
              {paymentHistory.map((payment) => (
                <li key={payment._id}>
                  <div className="payment-info">
                    <span className="course-name">{payment.course}</span>
                    <span className="amount">€{payment.amount}</span>
                    <span className="date">Paid: {new Date(payment.paidDate).toLocaleDateString()}</span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No payment history found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;