import React from 'react';
import './Payment.css';

const Payment = () => {
  const duePayments = [
    { course: 'Beginner Swimming', amount: '€50', dueDate: 'June 1, 2024' },
    { course: 'Advanced Swimming', amount: '€70', dueDate: 'July 3, 2024' },
  ];

  const paymentHistory = [
    { course: 'Intermediate Swimming', amount: '€60', date: 'May 1, 2024' },
    { course: 'Family Fun Day', amount: '€40', date: 'April 20, 2024' },
  ];

  return (
    <div className="payment-page">
      <div className="payment-container">
        <h1>Payment Overview</h1>
        <div className="payment-section">
          <h2>Due Payments</h2>
          <ul>
            {duePayments.map((payment, index) => (
              <li key={index}>
                <div className="payment-info">
                  <span className="course-name">{payment.course}</span>
                  <span className="amount">{payment.amount}</span>
                  <span className="due-date">Due: {payment.dueDate}</span>
                </div>
                <button className="pay-now-btn">Pay Now</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="payment-section">
          <h2>Payment History</h2>
          <ul>
            {paymentHistory.map((payment, index) => (
              <li key={index}>
                <div className="payment-info">
                  <span className="course-name">{payment.course}</span>
                  <span className="amount">{payment.amount}</span>
                  <span className="date">Paid: {payment.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Payment;
