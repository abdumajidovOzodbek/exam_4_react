/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Shopping from "../shopping/shopping";
import Crud2 from "./crudcard2";
import { data } from "../../data";

const Crud = () => {
  const newcart = useSelector((state) => state.dataSlice2.items);
  const total = useSelector((state) => state.dataSlice2.amount);
  const tot = useSelector((state) => state.dataSlice2.total);
  const dispatch = useDispatch();
  return (
    <>
      <div className="cloud">
        <h1>Корзина</h1>
        <div className="all1">
          <div className="direct">
            {data.foods.map((item) => (
              <Crud2
                key={item.id}
                item={{
                  id: item.id,
                  foodName: item.foodName,
                  quantity: item.quantity,
                  cost: item.cost,
                  totalPrice: item.totalPrice,
                  image: item.image,
                  info:item.info
                }}
              />
            ))}
          </div>
          <div className="all">
            <div>
              <h2>ИТОГО</h2>
              <h3>{tot}T</h3>
            </div>
            <NavLink to='/create/post' className='krt'>add foods or restarant</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crud;
