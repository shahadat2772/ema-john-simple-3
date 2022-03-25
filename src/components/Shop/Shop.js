import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
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

  //   Add to cart Handler
  const addToCart = (selectedProduct) => {
    console.log("Add btn clicked", selectedProduct);
  };
  return (
    <div className="shopContainer">
      {/* Product container */}
      <div className="productContainer">
        {products.map((product) => (
          <Product
            addToCart={addToCart}
            key={product.id}
            product={product}
          ></Product>
        ))}
      </div>
      {/* Cart Container */}
      <div className="cartContainer">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;
