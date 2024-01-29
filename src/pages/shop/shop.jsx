import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";

export function Shop() {
  return (
    <div className="products">
      {PRODUCTS.map((product) => (
        <Product data={product} />
      ))}
    </div>
  );
}
