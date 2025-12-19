// import React, { useEffect, useState } from "react";
// import "./OrderSummary.css";
//   import { useNavigate, useLocation } from "react-router-dom";

//  const dummyProducts = [
//   {
//     id: 1,
//     title: "boAt Rockerz Plus 550",
//     description: "Wireless Headphones with 100H Playback, 50mm Drivers",
//     price: 199,
//     mrp: 2299,
//     imageurls: [
//       "/headphones.webp",
//       "/h2.webp",
//       "/h3.webp",
//       "/h4.webp",
//       "/h5.webp",
//     ],
//     sold: 5000,
//   },

//   {
//     id: 2,
//     title: "OnePlus Buds Pro 3",
//     description:
//       "Bluetooth TWS in-Ear Buds – Dual Drivers, Dual DACs, Dynaudio EQs, AI-Powered Translator, Up to 50dB Adaptive Noise Cancellation, Up to 43Hrs Battery.",
//     price: 199,
//     mrp: 8999,
//     imageurls: [
//       "/one1.webp",
//       "/one2.webp",
//       "/one3.webp",
//       "/one4.webp",
//       "/one5.webp",
//       "/one6.webp",
//     ],
//     sold: 10000,
//   },
//   {
//     id: 3,
//     title: "noise ColorFit Pro 6 Max",
//     description:
//       "noise ColorFit Pro 6 Max, 1.96 AMOLED Display, AI Companion,upto 20 Days Battery,BT Calling,GPS,Compass,IP68 Smartwatch",
//     price: 199,
//     mrp: 6499,
//     imageurls: ["/n1.webp", "/n2.webp", "/n3.webp", "/n4.webp", "/n5.webp"],
//     sold: 3700,
//   },
//   {
//     id: 4,
//     title: "Room Heater Longway Blaze 800W ",
//     description:
//       "Longway Blaze 800W Quartz Room Heater | 2 Heating Rods for Quick Heating | ISI Approved | Dual Heat Settings (400W/800W) | Compact & Portable | Shockproof ABS Body | Grey",
//     price: 199,
//     mrp: 2999,
//     imageurls: [
//       "/heat1.jpg",
//       "/heat5.jpg",
//       "/heat2.jpg",
//       "/heat4.jpg",
//       "/heat3.jpg",
//     ],
//     sold: 7500,
//   },

//   {
//     id: 5,
//     title: "realme neckband Wireless",
//     description:
//       "5 ANC in Ear Bluetooth Headphones,50dB ANC, 13.6mm Dynamic Bass Driver,360° Spatial Audio,45ms Low Latency,Upto 38hrs Playback,IP55 Rating,Dual Device Connection (Midnight Black)",
//     price: 199,
//     mrp: 2999,
//     imageurls: ["/r1.jpg", "/r2.jpg", "/r3.jpg", "/r4.jpg", "/r5.jpg"],
//     sold: 8000,
//   },
//   {
//     id: 6,
//     title: "Air Purifier 1000i Series",
//     description:
//       "Air Purifier for Medium Rooms , Purifies the air in less than 10 mins",
//     price: 199,
//     mrp: 8999,
//     imageurls: ["/p1.webp", "/p2.webp", "/p3.webp", "/p4.webp", "/p5.webp", "/p6.webp"],

//     sold: 20000,
//   },
// ];

// const OrderSummary = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//     const productId = location.state?.productId;

//   const [address, setAddress] = useState(null);

//   useEffect(() => {
//     const saved = localStorage.getItem("userAddress");
//     if (saved) {
//       setAddress(JSON.parse(saved));
//     }
//   }, []);

//   return (
//     <div className="order-summary-page">
//       {/* Header */}
//       <div className="summary-header">
//         <span className="back-btn" onClick={() => navigate(-1)}>←</span>
//         <h2>Order Summary</h2>
//       </div>

//       {/* Step Indicator */}
//       <div className="steps">
//         <div className="step completed">
//           <div className="circle">✓</div>
//           <span>Address</span>
//         </div>

//         <div className="line active"></div>

//         <div className="step active">
//           <div className="circle active-num">2</div>
//           <span>Order Summary</span>
//         </div>

//         <div className="line"></div>

//         <div className="step">
//           <div className="circle">3</div>
//           <span>Payment</span>
//         </div>
//       </div>

//       {/* Delivered To Section */}
//       <div className="delivered-box">
//         <h3>Delivered to:</h3>

//         {address ? (
//           <p>
//             <strong>{address.fullName}</strong> <br />
//             {address.house}, {address.road} <br />
//             {address.city}, {address.state} - {address.pincode} <br />
//             Mobile: {address.mobile}
//           </p>
//         ) : (
//           <p>No address found</p>
//         )}
//       </div>

//       {/* Product Row */}
//       <div className="product-row">
//         <img
//           src="https://m.media-amazon.com/images/I/61CGHv6kmWL._SL1500_.jpg"
//           alt=""
//           className="summary-img"
//         />

//         <div>
//           <p className="prod-title">EKSA E900Pro Gaming Wired Over Ear...</p>
//           <p className="qty">Qty: 1</p>
//           <p className="price">₹99</p>
//         </div>
//       </div>

//       {/* Price Details */}
//       <div className="price-box">
//         <h3>Price Details</h3>

//         <div className="price-item">
//           <span>Price (1 item)</span>
//           <span>₹5999</span>
//         </div>

//         <div className="price-item">
//           <span>Discount</span>
//           <span className="green">90% off</span>
//         </div>

//         <div className="price-item">
//           <span>Delivery Charges</span>
//           <span className="green">FREE Delivery</span>
//         </div>

//         <div className="price-item total">
//           <span>Total Amount</span>
//           <span className="total-price">₹99</span>
//         </div>

//         <p className="save-msg">
//           You will save 90% off on this order
//         </p>
//       </div>

//       {/* Continue Button */}
//       <button className="continue-btn" onClick={() => navigate("/payment")}>
//         Continue
//       </button>
//     </div>
//   );
// };

// export default OrderSummary;


import React, { useEffect, useState } from "react";
import "./OrderSummary.css";
import { useNavigate, useLocation } from "react-router-dom";

const dummyProducts = [
  {
    id: 1,
    title: "boAt Rockerz Plus 550",
    description: "Wireless Headphones with 100H Playback, 50mm Drivers",
    price: 199,
    mrp: 2299,
    imageurls: ["/headphones.webp"],
    sold: 5000,
  },
  {
    id: 2,
    title: "OnePlus Buds Pro 3",
    description: "Bluetooth TWS in-Ear Buds",
    price: 199,
    mrp: 8999,
    imageurls: ["/one1.webp"],
    sold: 10000,
  },
  {
    id: 3,
    title: "noise ColorFit Pro 6 Max",
    description: "AMOLED Smartwatch",
    price: 199,
    mrp: 6499,
    imageurls: ["/n1.webp"],
    sold: 3700,
  },
  {
    id: 4,
    title: "Room Heater Longway Blaze 800W",
    description: "Quartz Room Heater",
    price: 199,
    mrp: 2999,
    imageurls: ["/heat1.jpg"],
    sold: 7500,
  },
  {
    id: 5,
    title: "realme neckband Wireless",
    description: "Wireless Neckband",
    price: 199,
    mrp: 2999,
    imageurls: ["/r1.jpg"],
    sold: 8000,
  },
  {
    id: 6,
    title: "Air Purifier 1000i Series",
    description: "Air Purifier",
    price: 199,
    mrp: 8999,
    imageurls: ["/p1.webp"],
    sold: 20000,
  },
  {
          id: 7,
          title: "boAt Wave Aura",
          description: "Smartwatch with 1.96, HD Display, 100+ Sports Modes, Functional Crown, Advanced BT Calling",
          price: 199,
          mrp: 2999,
          imageurls: ["/boat1.webp"],
          sold: 5000,
        },
];

const OrderSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const productId = location.state?.productId;
  const product = dummyProducts.find((p) => p.id === productId);

  const [address, setAddress] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("userAddress");
    if (saved) setAddress(JSON.parse(saved));
  }, []);

  if (!product) {
    return <p style={{ padding: 20 }}>No product found</p>;
  }

  const discountPercent = Math.round(
    ((product.mrp - product.price) / product.mrp) * 100
  );

  return (
    <div className="order-summary-page">
      {/* Header */}
      <div className="summary-header">
        <span className="back-btn" onClick={() => navigate(-1)}>←</span>
        <h2>Order Summary</h2>
      </div>

      {/* Step Indicator */}
      <div className="steps">
        <div className="step completed">
          <div className="circle">✓</div>
          <span>Address</span>
        </div>

        <div className="line active"></div>

        <div className="step active">
          <div className="circle active-num">2</div>
          <span>Order Summary</span>
        </div>

        <div className="line"></div>

        <div className="step">
          <div className="circle">3</div>
          <span>Payment</span>
        </div>
      </div>

      {/* Delivered To */}
      <div className="delivered-box">
        <h3>Delivered to:</h3>
        {address ? (
          <p>
            <strong>{address.fullName}</strong><br />
            {address.house}, {address.road}<br />
            {address.city}, {address.state} - {address.pincode}<br />
            Mobile: {address.mobile}
          </p>
        ) : (
          <p>No address found</p>
        )}
      </div>

      {/* Product Row */}
      <div className="product-row">
        <img
          src={product.imageurls[0]}
          alt={product.title}
          className="summary-img"
        />

        <div>
          <p className="prod-title">{product.title}</p>
          <p className="qty">Qty: 1</p>
          <p className="price">₹{product.price}</p>
        </div>
      </div>

      {/* Price Details */}
      <div className="price-box">
        <h3>Price Details</h3>

        <div className="price-item">
          <span>Price (1 item)</span>
          <span>₹{product.mrp}</span>
        </div>

        <div className="price-item">
          <span>Discount</span>
          <span className="green">{discountPercent}% off</span>
        </div>

        <div className="price-item">
          <span>Delivery Charges</span>
          <span className="green">FREE Delivery</span>
        </div>

        <div className="price-item total">
          <span>Total Amount</span>
          <span className="total-price">₹{product.price}</span>
        </div>

        <p className="save-msg">
          You will save ₹{product.mrp - product.price} on this order
        </p>
      </div>

      {/* Continue */}
      <button
        className="continue-btn"
        onClick={() => navigate("/payment", { state: { productId } })}
      >
        Continue
      </button>
    </div>
  );
};

export default OrderSummary;





// import React, { useEffect, useState } from "react";
// import "./OrderSummary.css";
// import { useNavigate, useLocation } from "react-router-dom";

// const OrderSummary = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   // product passed via route state
//   const productId = location.state?.productId;

//   const [address, setAddress] = useState(null);

//   useEffect(() => {
//     const saved = localStorage.getItem("userAddress");
//     if (saved) {
//       setAddress(JSON.parse(saved));
//     }
//   }, []);

//   // safety check
//   if (!product) {
//     return <p style={{ padding: 20 }}>No product found</p>;
//   }

//   const discountPercent = Math.round(
//     ((product.mrp - product.price) / product.mrp) * 100
//   );

//   return (
//     <div className="order-summary-page">
//       {/* Header */}
//       <div className="summary-header">
//         <span className="back-btn" onClick={() => navigate(-1)}>
//           ←
//         </span>
//         <h2>Order Summary</h2>
//       </div>

//       {/* Steps */}
//       <div className="steps">
//         <div className="step completed">
//           <div className="circle">✓</div>
//           <span>Address</span>
//         </div>

//         <div className="line active"></div>

//         <div className="step active">
//           <div className="circle active-num">2</div>
//           <span>Order Summary</span>
//         </div>

//         <div className="line"></div>

//         <div className="step">
//           <div className="circle">3</div>
//           <span>Payment</span>
//         </div>
//       </div>

//       {/* Address */}
//       <div className="delivered-box">
//         <h3>Delivered to:</h3>

//         {address ? (
//           <p>
//             <strong>{address.fullName}</strong>
//             <br />
//             {address.house}, {address.road}
//             <br />
//             {address.city}, {address.state} - {address.pincode}
//             <br />
//             Mobile: {address.mobile}
//           </p>
//         ) : (
//           <p>No address found</p>
//         )}
//       </div>

//       {/* Product */}
//       <div className="product-row">
//         <img
//           src={product.imageurls[0]}
//           alt={product.title}
//           className="summary-img"
//         />

//         <div>
//           <p className="prod-title">{product.title}</p>
//           <p className="qty">Qty: 1</p>
//           <p className="price">₹{product.price}</p>
//         </div>
//       </div>

//       {/* Price Details */}
//       <div className="price-box">
//         <h3>Price Details</h3>

//         <div className="price-item">
//           <span>Price (1 item)</span>
//           <span>₹{product.mrp}</span>
//         </div>

//         <div className="price-item">
//           <span>Discount</span>
//           <span className="green">{discountPercent}% off</span>
//         </div>

//         <div className="price-item">
//           <span>Delivery Charges</span>
//           <span className="green">FREE Delivery</span>
//         </div>

//         <div className="price-item total">
//           <span>Total Amount</span>
//           <span className="total-price">₹{product.price}</span>
//         </div>

//         <p className="save-msg">
//           You will save ₹{product.mrp - product.price} on this order
//         </p>
//       </div>

//       {/* Continue */}
//       <button
//         className="continue-btn"
//         onClick={() => navigate("/payment", { state: { product } })}
//       >
//         Continue
//       </button>
//     </div>
//   );
// };

// export default OrderSummary;
