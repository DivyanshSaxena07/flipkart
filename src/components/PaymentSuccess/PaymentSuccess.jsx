import React from "react";
import "./PaymentSuccess.css";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="success-container">

      {/* Confetti Animation */}
      <div className="confetti"></div>

      <div className="success-card">
        <div className="tick-circle">
          <span className="tick">✔</span>
        </div>

        <h2>Payment Successful!</h2>
        <p>Your payment of <b>₹199</b> has been received.</p>

        <div className="order-box">
          <p>Order ID: <b>#FLPKT{Math.floor(Math.random() * 99999)}</b></p>
          <p>Paid via: <b>UPI</b></p>
        </div>

        <button className="continue-btn" onClick={goHome}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;

