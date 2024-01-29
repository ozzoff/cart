import React, { createContext } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = React.createContext(null);

function getDeafaultCart() {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

export function ShowContextProvider(props) {
  let [cartItems, setcartItems] = React.useState(getDeafaultCart());
  function addToCart(itemID) {
    setcartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  }
  function RemoveCart(itemID) {
    setcartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  }
  function UpdateCartTotal(itemID, newAmount) {
    setcartItems((prev) => ({ ...prev, [itemID]: newAmount }));
  }

  function GetTotal() {
    let totalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return  totalAmount;
  }
  let contextValue = {
    cartItems,
    addToCart,
    RemoveCart,
    UpdateCartTotal,
    GetTotal,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
