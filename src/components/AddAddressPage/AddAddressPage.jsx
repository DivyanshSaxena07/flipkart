import React, { useState } from "react";
import "./AddAddressPage.css";
import { useNavigate  ,useLocation } from "react-router-dom";

const AddAddressPage = () => {
  const navigate = useNavigate();
   const location = useLocation();

  const productId = location.state?.productId;

  // ⭐ ADD STATE FOR ALL INPUTS (THIS WAS MISSING)
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Delhi");
  const [house, setHouse] = useState("");
  const [road, setRoad] = useState("");

  const handleSaveAddress = () => {
    const addressData = {
      fullName,
      mobile,
      pincode,
      city,
      state,
      house,
      road,
    };
    console.log("Address id:", productId);

    localStorage.setItem("userAddress", JSON.stringify(addressData));

    navigate("/order-summary", {
  state: { productId}
});
  };

  return (
    <>
    {/* Flipkart Top Blue Header */}
  <div className="fk-header">
    <div className="fk-left">
      <img src="/fliplogo.png" alt="Flipkart" className="fk-logo" />
    </div>

    <div className="fk-search">
      <input
        type="text"
        placeholder="Search for products, brands and more"
      />
    </div>

    <div className="fk-icons">
      <span>🛒</span>
      <span>👤</span>
    </div>
  </div>
    <div className="address-page">
      
      {/* Flipkart Top Blue Header */}


      <div className="address-header">
        <span className="back-arrow" onClick={() => window.history.back()}>
          ←
        </span>
        <h2>Add delivery address</h2>
      </div>

      {/* Steps */}
      <div className="steps">
        <div className="step active">
          <div className="circle active-circle">1</div>
          <p>Address</p>
        </div>

        <div className="line"></div>

        <div className="step">
          <div className="circle">2</div>
          <p>Order Summary</p>
        </div>

        <div className="line"></div>

        <div className="step">
          <div className="circle">3</div>
          <p>Payment</p>
        </div>
      </div>

      {/* Form */}
      <form className="address-form">
        <input
          type="text"
          placeholder="Full Name (Required)*"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Mobile number (Required)*"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <input
          type="text"
          placeholder="Pincode (Required)*"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />

        <div className="city-state-row">
          <input
            type="text"
            placeholder="City (Required)*"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <select value={state} onChange={(e) => setState(e.target.value)}>
            <option>Andhra Pradesh</option>
            <option>Arunachal Pradesh</option>
            <option>Assam</option>
            <option>Bihar</option>
            <option>Chhattisgarh</option>
            <option>Goa</option>
            <option>Gujarat</option>
            <option>Haryana</option>
            <option>Himachal Pradesh</option>
            <option>Jharkhand</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Madhya Pradesh</option>
            <option>Maharashtra</option>
            <option>Manipur</option>
            <option>Meghalaya</option>
            <option>Mizoram</option>
            <option>Nagaland</option>
            <option>Odisha</option>
            <option>Punjab</option>
            <option>Rajasthan</option>
            <option>Sikkim</option>
            <option>Tamil Nadu</option>
            <option>Telangana</option>
            <option>Tripura</option>
            <option>Uttar Pradesh</option>
            <option>Uttarakhand</option>
            <option>West Bengal</option>

          </select>
        </div>

        <input
          type="text"
          placeholder="House No., Building Name (Required)*"
          value={house}
          onChange={(e) => setHouse(e.target.value)}
        />

        <input
          type="text"
          placeholder="Road name, Area, Colony (Required)*"
          value={road}
          onChange={(e) => setRoad(e.target.value)}
        />
      </form>

      {/* Save Button */}
      <button className="save-btn" onClick={handleSaveAddress}>
        Save Address
      </button>
    </div>
    </>
  );
};

export default AddAddressPage;
