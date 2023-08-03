/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Shopping from "../shopping/shopping";
import Favorite from "./favorite";

const Favorite2 = () => {
  const newcart = useSelector((state) => state.dataSlice2.items);
  const total = useSelector((state) => state.dataSlice2.amount);
  const tot = useSelector((state) => state.dataSlice2.total);
  const dispatch = useDispatch();
  if (total === 0) {
    return <Shopping />;
  }
  return (
    <>
      <div className="cloud">
        <h1>Корзина</h1>
        <div className="all1">
          <div className="direct">
            {newcart.map((item) => (
              <Favorite
                key={item.id}
                item={{
                  id: item.id,
                  foodName: item.foodName,
                  quantity: item.quantity,
                  cost: item.cost,
                  totalPrice: item.totalPrice,
                  image: item.image,
                }}
              />
            ))}
          </div>
          <div className="all">
            <div>
              <h2>ИТОГО</h2>
              <h3>{tot}T</h3>
            </div>
            <NavLink to='/zakaz' className='krt'>Перейти к оформлению</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
{
  /* <h1>{title}</h1>
<h1>{quantity}</h1>
<h1>{price}</h1>
<button
  onClick={() => {
    dispatch(removeItem(id)), dispatch(calculateTotals());
  }}
>
  id
</button>
<button
  onClick={() => {
    dispatch(incrase({ id }));
    dispatch(calculateTotals());
  }}
>
  +
</button>
<button
  onClick={() => {
    if (quantity === 1) {
      dispatch(removeItem(id));
      dispatch(calculateTotals());
    }
    dispatch(decrease({ id }));
    dispatch(calculateTotals());
  }}
>
  -
</button> */
}

export default Favorite2;
