import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/navbar/navbar';
import Home from './components/Home/Home';
import ProductPage from './components/ProductPage/ProductPage';
import AddAddressPage from './components/AddAddressPage/AddAddressPage';
import OrderSummary from './components/OrderSummary/OrderSummary';
import PaymentPage from './components/PaymentPage/PaymentPage';
import PaymentSuccess from './components/PaymentSuccess/PaymentSuccess';
// import Profile from './components/Profile/Profile';
import './App.css';

function App() {
  return (
    <Router>
      
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product/:id" element={<Profile/>} /> */}
        {/* Add more routes here if needed */}
                <Route path="/product/:id" element={<ProductPage/>} />
                <Route path="/add-address" element={<AddAddressPage/>} />
                <Route path="/order-summary" element={<OrderSummary/>} />
                <Route path="/payment" element={<PaymentPage/>} />
                <Route path="/payment-success" element={<PaymentSuccess/>} />

      </Routes>
    </Router>
  );
}

export default App;
