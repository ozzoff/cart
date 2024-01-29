import React from "react";
import { Trash } from "phosphor-react";

import { ShopContext } from "../../context/shop-context";

export function CartItem(props) {
  let { img, name, price, id } = props.data;

  let { cartItems, addToCart, RemoveCart, UpdateCartTotal } =
    React.useContext(ShopContext);
  return (
    <div>
      <div className="card-content">
        <div className="card-img">
          <img src={img}></img>
        </div>
        <div className="card-info">
          <h1>{name}</h1>
          <h2>${price * cartItems[id]}</h2>
          <div className="amount">
            <button onClick={() => addToCart(id)}>+</button>
            <input
              type="text"
              onChange={(e) => UpdateCartTotal(id, Number(e.target.value))}
              value={cartItems[id]}
            />
            <button onClick={() => RemoveCart(id)}>-</button>
          </div>
        </div>

        <div className="card-delete">
          <Trash size={32} color="red"></Trash>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
}
