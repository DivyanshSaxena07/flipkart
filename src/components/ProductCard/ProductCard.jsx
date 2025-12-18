import React, { Component } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default class ProductCard extends Component {
  render() {
    const { id, image, title, description, price, mrp } = this.props;

    // compute discount if mrp provided
    const discount =
      mrp && mrp > price ? Math.round(((mrp - price) / mrp) * 100) : null;

    return (
      <div className="pcard">
        <Link to={`/product/${id}`} className="pcard-link">
          <div className="img-wrap">
            <img src={image} alt={title} />
          </div>
          <div className="pcard-body">
            <h4 className="pcard-title">{title}</h4>
            <p className="pcard-desc">{description}</p>
            <div className="price-row">
              <div className="curr">
                <span className="new">₹{price}</span>
                {mrp ? <span className="old">₹{mrp}</span> : null}
              </div>
              {discount ? <div className="discount">{discount}% OFF</div> : null}
            </div>
            <div className="badges">
              <span className="badge">Assured</span>
              <span className="badge">Free Delivery</span>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
