import React from "react";
import ProductCard from "../ProductCard";

import "./index.scss";

const ProductList = ({ items, onRemoveItem }) => (
  <main className="product-list alignCenter">
    {items.map(item => (
      <ProductCard
        key={item.id}
        item={item}
        onClick={() => onRemoveItem(item.id)}
      />
    ))}
  </main>
);

export default ProductList;
