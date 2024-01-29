import React from "react";
import { PRODUCTS } from "../../products";

import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cartItem";

export function Card() {
  let { cartItems, UpdateCartTotal, GetTotal } = React.useContext(ShopContext);
  let totalAmount = GetTotal();
  return (
    <div className="card">
      <h1 className="card-title">Cart Items</h1>
      <div className="card">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <p>Total:${totalAmount}</p>
      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}
