import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // Setting products
  const [products, setProducts] = useState([]);
  //   Getting products
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shopContainer">
      {/* Product container */}
      <div className="productContainer">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      {/* Cart Container */}
      <div className="cartContainer">
        <h2>Cart</h2>
      </div>
    </div>
  );
};

export default Shop;
