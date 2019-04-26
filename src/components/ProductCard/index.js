import React from "react";
import "./index.scss";
import closeIcon from "../../assets/remove.svg";

const ProductCard = ({ item, onClick }) => (
  <div className="product-card">
    <button className="remove-btn" onClick={onClick}>
      <img src={closeIcon} />
    </button>
    <div className="image-container">
      <img className="image" src={item.image} />
    </div>
    <div className="info-container alignCenter">
      <div className="brandName">{item.name}</div>
      <div className="price">
        {"€ " + Number(item.price)}
        {/*Number(item.price).toLocaleString("pt-PT", {
          style: "currency",
          currency: "EUR"
        })*/}
      </div>
    </div>
  </div>
);

export default ProductCard;
