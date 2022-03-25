import React, { useEffect, useState } from "react";
import { getCart, addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // Setting products
  const [products, setProducts] = useState([]);

  //   Setting CART
  const [cart, setCart] = useState([]);
  console.log(cart);
  //   Getting products
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Getting product from local storage
  useEffect(() => {
    const storedProduct = getCart();
    // console.log(storedProduct);
    let savedProducts = [];
    for (const id in storedProduct) {
      // console.log(id, storedProduct[id]);
      const matchedProduct = products.find((product) => product.id === id);
      if (matchedProduct) {
        matchedProduct.quantity = storedProduct[id];
        savedProducts.push(matchedProduct);
      }
    }

    setCart(savedProducts);
    console.log(savedProducts);
  }, [products]);

  //   Add to cart Handler
  const addToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (exists) {
      const rest = cart.filter((product) => product.id !== exists.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    } else {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
    // console.log("Add btn clicked", selectedProduct);
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
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
