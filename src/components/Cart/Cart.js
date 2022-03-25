import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  //   console.log(cart);

  let quantity = 0;
  let totalPrice = 0;
  let totalShipping = 0;

  for (const product of cart) {
    quantity += product.quantity;
    totalPrice += product.price * product.quantity;
    totalShipping += product.shipping;
  }

  let tax = totalPrice * 0.1;

  let grandTotal = totalPrice + totalPrice + tax;

  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <p>Selected Item: {quantity}</p>
      <p>Total Price: {totalPrice}$</p>
      <p>Total Shipping: {totalShipping}$</p>
      <p>Tax: {tax}$</p>
      <h3>Grand Total: {grandTotal}$</h3>
    </div>
  );
};

export default Cart;
