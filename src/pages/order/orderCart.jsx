/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./order.css";
const OrderCart = (props) => {
  const { foodName, quantity, totalPrice } = props.item;
  return (
    <div>
      <div>
        <h3 style={{ marginLeft: "-20px" }}>{quantity}x</h3>
        <h3 style={{ marginLeft: "5px" }}>{foodName}</h3>
      </div>
      <h3>{totalPrice}sum</h3>
    </div>
  );
};

export default OrderCart;
