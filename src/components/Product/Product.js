import React from "react";
import "./Product.css";

const Product = ({ product, addToCart }) => {
  //   console.log(product);
  const { name, price, seller, ratings, img } = product;
  console.log(name, price, seller, ratings, img);
  return (
    <div className="productCard">
      <img src={img} alt="" />
      <div className="cardInfo">
        <p>{name}</p>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratings {ratings} star</p>
      </div>
      <button onClick={() => addToCart(product)} className="AddBtn">
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
