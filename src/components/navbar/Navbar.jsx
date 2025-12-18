import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <span className="flip-logo">Flipkart</span>
          <span className="logo-sub">Explore <b>Plus</b></span>
        </Link>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search for products, brands and more" />
          <button className="search-btn">🔍</button>
        </div>

        {/* Right Options */}
        <div className="right-menu">
          <button className="login-btn">Login</button>
          <Link to="/cart" className="cart">
            🛒 <span>Cart</span>
          </Link>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className={menuOpen ? "bar rotate" : "bar"}></div>
            <div className={menuOpen ? "bar hide" : "bar"}></div>
            <div className={menuOpen ? "bar rotate-reverse" : "bar"}></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
