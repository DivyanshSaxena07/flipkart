// import React from "react";
// import "./ProductPage.css";

// const ProductPage = () => {
//   return (
//     <div className="product-page">
//       {/* Product Image */}
//       <div className="product-image">
//         <img
//           src="https://m.media-amazon.com/images/I/61CGHv6kmWL._SL1500_.jpg"
//           alt="Headphone"
//         />
//       </div>

//       {/* Product Info */}
//       <div className="product-info">
//         <h2 className="product-title">
//           EKSA E900Pro Gaming Wired Over Ear Headphones with Virtual 7.1 Surround Sound
//         </h2>

//         <div className="product-pricing">
//           <span className="discount">90% off</span>
//           <span className="mrp">₹5999</span>
//           <span className="price">₹99</span>
//         </div>

//         <div className="offer-timer">
//           Offer ends in <span className="timer">3:44</span>
//         </div>

//         <div className="sold">
//           <img
//             src="https://cdn-icons-png.flaticon.com/512/189/189690.png"
//             alt="sales"
//           />
//           <p>8625+ Sold In Last 7 Days</p>
//         </div>

//         <div className="warranty">
//           <img
//             src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/Plus_aef861.png"
//             alt="flipkart"
//           />
//           <p>1 Year Manufacturer Warranty</p>
//         </div>
//       </div>

//       <div className="product-desc">
//         <h3>Detachable and Adjustable Noise-Cancelling Microphone</h3>
//         <p>
//           Transmit high quality communication and 360° rotating to pick up your voice clearly.
//         </p>
//       </div>

//       {/* Bottom Buttons */}
//       <div className="bottom-buttons">
//         <button className="add-to-cart">Add to Cart</button>
//         <button className="buy-now">Buy Now</button>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

import React from "react";
import "./ProductPage.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const dummyProducts = [
  {
    id: 1,
    title: "boAt Rockerz Plus 550",
    description: "Wireless Headphones with 100H Playback, 50mm Drivers",
    price: 199,
    mrp: 2299,
    imageurls: [
      "/headphones.webp",
      "/h2.webp",
      "/h3.webp",
      "/h4.webp",
      "/h5.webp",
    ],
    sold: 5000,
  },

  {
    id: 2,
    title: "OnePlus Buds Pro 3",
    description:
      "Bluetooth TWS in-Ear Buds – Dual Drivers, Dual DACs, Dynaudio EQs, AI-Powered Translator, Up to 50dB Adaptive Noise Cancellation, Up to 43Hrs Battery.",
    price: 199,
    mrp: 8999,
    imageurls: [
      "/one1.webp",
      "/one2.webp",
      "/one3.webp",
      "/one4.webp",
      "/one5.webp",
      "/one6.webp",
    ],
    sold: 10000,
  },
  {
    id: 3,
    title: "noise ColorFit Pro 6 Max",
    description:
      "noise ColorFit Pro 6 Max, 1.96 AMOLED Display, AI Companion,upto 20 Days Battery,BT Calling,GPS,Compass,IP68 Smartwatch",
    price: 199,
    mrp: 6499,
    imageurls: ["/n1.webp", "/n2.webp", "/n3.webp", "/n4.webp", "/n5.webp"],
    sold: 3700,
  },
  {
    id: 4,
    title: "Room Heater Longway Blaze 800W ",
    description:
      "Longway Blaze 800W Quartz Room Heater | 2 Heating Rods for Quick Heating | ISI Approved | Dual Heat Settings (400W/800W) | Compact & Portable | Shockproof ABS Body | Grey",
    price: 199,
    mrp: 2999,
    imageurls: [
      "/heat1.jpg",
      "/heat5.jpg",
      "/heat2.jpg",
      "/heat4.jpg",
      "/heat3.jpg",
    ],
    sold: 7500,
  },

  {
    id: 5,
    title: "realme neckband Wireless",
    description:
      "5 ANC in Ear Bluetooth Headphones,50dB ANC, 13.6mm Dynamic Bass Driver,360° Spatial Audio,45ms Low Latency,Upto 38hrs Playback,IP55 Rating,Dual Device Connection (Midnight Black)",
    price: 199,
    mrp: 2999,
    imageurls: ["/r1.jpg", "/r2.jpg", "/r3.jpg", "/r4.jpg", "/r5.jpg"],
    sold: 8000,
  },
  {
    id: 6,
    title: "Air Purifier 1000i Series",
    description:
      "Air Purifier for Medium Rooms , Purifies the air in less than 10 mins",
    price: 199,
    mrp: 8999,
    imageurls: ["/p1.webp", "/p2.webp", "/p3.webp", "/p4.webp", "/p5.webp", "/p6.webp"],

    sold: 20000,
  },
  {
          id: 7,
          title: "boAt Wave Aura",
          description: "Smartwatch with 1.96, HD Display, 100+ Sports Modes, Functional Crown, Advanced BT Calling",
          price: 199,
          mrp: 2999,
         imageurls: ["/boat1.webp", "/boat2.webp", "/boat3.webp", "/boat4.webp", "/boat5.webp", "/boat6.webp"],
        },
];

const ProductPage = () => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
navigate("/add-address", {
  state: { productId: product.id }
});
  };

  const handleAddToCart = () => {
    // navigate("/add-address");
navigate("/add-address", {
  state: { productId: product.id }
});
  };

  const { id } = useParams();
  const product = dummyProducts.find((p) => p.id === parseInt(id));
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!product) return <h2>Product not found</h2>;

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === product.imageurls.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? product.imageurls.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Flipkart-style Blue Header */}
      <header className="flipkart-header">
        <div className="header-content">
          <img src="/fliplogo.png" alt="Flipkart" className="header-logo" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="header-search"
          />
          <div className="header-icons">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2838/2838838.png"
              alt="Cart"
              className="header-icon"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
              alt="User"
              className="header-icon"
            />
          </div>
        </div>
      </header>

      <div className="product-page">
        {/* Product Image with Wishlist & Share Buttons */}
        {/* <div className="product-image-container">
          <img
            src={product.imageurl}
            alt="Headphone"
            className="product-main-image"
          /> */}
        {/* SLIDER */}
        <div className="product-image-container">
          <button className="slider-btn left" onClick={prevImage}>
            ‹
          </button>

          <img
            src={product.imageurls[currentIndex]}
            className="product-main-image"
          />

          <button className="slider-btn right" onClick={nextImage}>
            ›
          </button>

          <div className="image-buttons">
            <button className="icon-btn wishlist">
              <img
                src="https://cdn-icons-png.flaticon.com/512/833/833472.png"
                alt="Wishlist"
              />
            </button>

            {/* SMALL THUMB IMAGES */}

            <button className="icon-btn share">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828950.png"
                alt="Share"
              />
            </button>
          </div>
        </div>
        <div className="thumbs">
          {product.imageurls.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`thumb-img ${index === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
        {/* Product Info */}
        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <h2 className="product-descr">{product.description}</h2>

          <div className="product-pricing">
            <span className="discount">90% off</span>
            <span className="mrp">{product.mrp}</span>
            <span className="price">{product.price}</span>
          </div>

          <div className="offer-timer">
            Offer ends in <span className="timer">3:44</span>
          </div>

          <div className="sold">
            <img
              src="https://cdn-icons-png.flaticon.com/512/189/189690.png"
              alt="sales"
            />
            <p>{product.sold} Sold In Last 7 Days</p>
          </div>

          <div className="warranty">
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/Plus_aef861.png"
              alt="flipkart"
            />
            <p>1 Year Manufacturer Warranty</p>
          </div>
        </div>

        {/* Description */}
        {/* Product Images Section */}
        <div className="product-images-section">
          <h3 className="images-title">Product Images</h3>

          <div className="product-images-grid">
            {product.imageurls.map((u, i) => (
              <img key={i} src={u} alt={`img-${i}`} />
            ))}
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="bottom-buttons">
          {/* <button className="add-to-cart">Add to Cart</button>
          <button className="buy-now">Buy Now</button> */}

          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="buy-now" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

// const ProductPage = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const product = dummyProducts.find((p) => p.id === parseInt(id));
//   const [currentIndex, setCurrentIndex] = useState(0);

//   if (!product) return <h2>Product not found</h2>;

//   const nextImage = () => {
//     setCurrentIndex((prev) =>
//       prev === product.imageurls.length - 1 ? 0 : prev + 1
//     );
//   };

//   const prevImage = () => {
//     setCurrentIndex((prev) =>
//       prev === 0 ? product.imageurls.length - 1 : prev - 1
//     );
//   };

//   return (
//     <>
//       {/* HEADER */}
//       <header className="flipkart-header">
//         <div className="header-content">
//           <img src="/fliplogo.png" className="header-logo" />
//           <input type="text" placeholder="Search..." className="header-search" />

//           <div className="header-icons">
//             <img src="https://cdn-icons-png.flaticon.com/512/2838/2838838.png" className="header-icon" />
//             <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" className="header-icon" />
//           </div>
//         </div>
//       </header>

//       <div className="product-page">

// {/* SLIDER */}
// <div className="product-image-container">
//   <button className="slider-btn left" onClick={prevImage}>‹</button>

//   <img
//     src={product.imageurls[currentIndex]}
//     className="product-main-image"
//   />

//   <button className="slider-btn right" onClick={nextImage}>›</button>

//           <div className="image-buttons">
//             <button className="icon-btn">
//               <img src="https://cdn-icons-png.flaticon.com/512/833/833472.png" />
//             </button>
//             <button className="icon-btn">
//               <img src="https://cdn-icons-png.flaticon.com/512/1828/1828950.png" />
//             </button>
//           </div>
//         </div>

//         {/* SMALL THUMB IMAGES */}
//         <div className="thumbs">
//           {product.imageurls.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               className={`thumb-img ${index === currentIndex ? "active" : ""}`}
//               onClick={() => setCurrentIndex(index)}
//             />
//           ))}
//         </div>

//         {/* Info */}
//         <div className="product-info">
//           <h2 className="product-title">{product.title}</h2>
//           <div className="product-pricing">
//             <span className="discount">90% off</span>
//             <span className="mrp">₹{product.mrp}</span>
//             <span className="price">₹{product.price}</span>
//           </div>
//         </div>

//         {/* BOTTOM BUTTONS */}
//         <div className="bottom-buttons">
//           <button className="add-to-cart">Add to Cart</button>
//           <button className="buy-now">Buy Now</button>
//         </div>

//       </div>
//     </>
//   );
// };

// export default ProductPage;
