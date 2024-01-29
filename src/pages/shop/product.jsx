import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export function Product(props) {
  const { id, name, img, price } = props.data;
  let { addToCart, cartItems } = useContext(ShopContext);
  let cartItemAmount = cartItems[id];
  return (
    <div>
      <img src={img}></img>
      <div className="product-details">
        <div>
          <h2>{name}</h2>
          <p>${price}</p>
          {cartItemAmount > 0 && <h2>{cartItemAmount}</h2>}
        </div>
        <div>
          <button onClick={() => addToCart(id)}>Buy</button>
        </div>
      </div>
    </div>
  );
}
