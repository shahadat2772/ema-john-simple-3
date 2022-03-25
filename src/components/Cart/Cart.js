import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Item:</p>
      <p>Total Price: $</p>
      <p>Total Shopping: $</p>
      <p>Tax: $</p>
      <h3>Grand Total: $</h3>
    </div>
  );
};

export default Cart;
