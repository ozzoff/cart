import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <div className="nav-img">
        <h2>Logo</h2>
      </div>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/card">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
}
