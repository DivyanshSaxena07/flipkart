import React, { Component } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./Home.css";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          id: 3,
          title: "noise ColorFit Pro 6 Max",
          description:
            "noise ColorFit Pro 6 Max, 1.96 AMOLED Display, AI Companion,upto 20 Days Battery,BT Calling,GPS,Compass,IP68 Smartwatch",
          price: 199,
          mrp: 6999,
          imageurl: "n1.webp",
        },
         
        {
          id: 2,
          title: "OnePlus Buds Pro 3",
          description: "Bluetooth TWS in-Ear Buds – Dual Drivers, Dual DACs, Dynaudio EQs, AI-Powered Translator, Up to 50dB Adaptive Noise Cancellation, Up to 43Hrs Battery.",
          price: 199,
          mrp: 2995,
          imageurl: "one1.webp",
        },

         {id: 1,
          title: "boAt Rockerz Plus 550",
          description:
            "Wireless Headphones with 100H Playback, 50mm Drivers & boAt Signature Sound",
          price: 199,
          mrp: 2299,
          imageurl: "headphones.webp",
        },
        {
          id: 4,
          title: "Room Heater Longway Blaze 800W ",
          description:
            "Longway Blaze 800W Quartz Room Heater | 2 Heating Rods for Quick Heating | ISI Approved | Dual Heat Settings (400W/800W) | Compact & Portable | Shockproof ABS Body | Grey",
          price: 199,
          mrp: 2999,
          imageurl: "heat1.jpg",
        },
        {
          id: 5,
          title: "realme neckband Wireless",
          description:
            "5 ANC in Ear Bluetooth Headphones,50dB ANC, 13.6mm Dynamic Bass Driver,360° Spatial Audio,45ms Low Latency,Upto 38hrs Playback,IP55 Rating,Dual Device Connection (Midnight Black)",
          price: 199,
          mrp: 21999,
          imageurl: "r1.jpg",
        },
        {
          id: 6,
          title: "Air Purifier 1000i Series",
          description: "Air Purifier for Medium Rooms , Purifies the air in less than 10 mins",
          price: 199,
          mrp: 8999,
          imageurl:
            "p1.webp",
        },
      ],
      // countdown target (example: 6 hours from now)
      timeLeft: this.computeInitialTimeLeft(6 * 60 * 60), // seconds
      search: "",
    };

    this.timer = null;
  }

  computeInitialTimeLeft(seconds) {
    return seconds;
  }

  componentDidMount() {
    // countdown timer
    this.timer = setInterval(() => {
      this.setState((prev) => {
        const next = prev.timeLeft > 0 ? prev.timeLeft - 1 : 0;
        return { timeLeft: next };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  formatTime(sec) {
    const h = Math.floor(sec / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((sec % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(sec % 60)
      .toString()
      .padStart(2, "0");
    return `${h}:${m}:${s}`;
  }

  handleSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { products, timeLeft, search } = this.state;
    const filtered = products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="home-root">
        <header className="blue-header">
          <div className="header-inner">
            <Link to="/" className="logo">
              <img
                src="/fliplogo.png"
                alt="Flipkart"
                className="flipkart-logo"
              />
            </Link>

            <div className="search-wrap">
              <input
                className="search-input"
                placeholder="Search for products, brands and more"
                value={search}
                onChange={this.handleSearchChange}
                aria-label="Search"
              />
              <button className="search-btn">Search</button>
            </div>

            <div className="header-actions">
              <Link to="/login" className="signin-link">
                Sign in
              </Link>
              <Link to="/cart" className="cart-link" title="Cart">
                🛒
                <span className="cart-count">2</span>
              </Link>
            </div>
          </div>
        </header>

        <main className="main-content">
          <section className="categories-row">
            <div className="cat">Top Offers</div>
            <div className="cat">Mobiles</div>
            <div className="cat">Fashion</div>
            <div className="cat">Electronics</div>
            <div className="cat">Appliances</div>
            <div className="cat">Home</div>
          </section>

          {/* <section className="banner">
            <div className="banner-left">
              <h2>Big Saving Days</h2>
              <p>Unbeatable prices on top brands — limited time only!</p>
              <button className="shop-now">Shop Now</button>
            </div>
            <div className="banner-right">
              <img
                src="https://res.cloudinary.com/dptzpyqyg/image/upload/v1732632555/pf63kzwmtd3f4rmpasvx.jpg"
                alt="banner"
              />
            </div>
          </section> */}

          <section className="full-banner">
            <img src="/fbd.webp" alt="big sale banner" />
          </section>

          <section className="deals">
            <div className="deals-left">
              <h3>Deals of the Day</h3>
              <p>Hurry up! Sale ends in</p>
              <div className="countdown">{this.formatTime(timeLeft)}</div>
            </div>

            {/* <div className="deals-right">
              <div className="mini-grid">
                {products.slice(0, 4).map((p) => (
                  <ProductCard
                    key={p.id}
                    id={p.id}
                    title={p.title}
                    description={
                      p.description.length > 60
                        ? p.description.slice(0, 60) + "..."
                        : p.description
                    }
                    image={p.imageurl}
                    price={p.price}
                    mrp={p.mrp}
                  />
                ))}
              </div>
            </div> */}
          </section>

          <section className="products-section">
            <h3 className="section-title">Recommended for you</h3>
            <div className="cards-grid">
              {filtered.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  title={p.title}
                  description={
                    p.description.length > 50
                      ? p.description.slice(0, 50) + "..."
                      : p.description
                  }
                  image={p.imageurl}
                  price={p.price}
                  mrp={p.mrp}
                />
              ))}
            </div>
          </section>
        </main>

        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Flipkart — All rights reserved © 2026 Flipkart LLC</p>
        </footer>
      </div>
    );
  }
}
