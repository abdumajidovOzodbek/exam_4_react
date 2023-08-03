/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
// import { cartAction } from "../../store/dataSlice";
import {
  addItemsCart,
  calculateTotals,
  clearCart,
} from "../../store/favoriteData";
import "./single.css";
import top from "../../../public/image/top.png";
import down from "../../../public/image/down.png";
import {
  addItemsCart2,
  calculateTotals2,
  clearCart2,
  removeItem2,
} from "../../store/dataSlice";
import { uiAction2 } from "../../store/toogle";
import { gql, useQuery } from '@apollo/client';
import { context } from "../../components/context";
// eslint-disable-next-line no-unused-vars
export default function SingleProduct() {
  const toggle = useSelector((state) => state.toggle.cartVisiblity)
  const dispatch = useDispatch();
  const { productId } = useParams();
  const numb = Number(productId);
  const [readMore, setReadMore] = useState(false);
  const { db } = useContext(context)
  console.log(db);
  const data = JSON.parse(localStorage.getItem('data'))
  console.log(data);
  const dataFrom = data.foods.filter((e) => e.id == numb);
  const [{
    type,
    info,
    image,
    id,
    foodName,
    cost
  },
  ] = dataFrom;
  // if (type === "holder") {
  //   useEffect(() => {
  //     setReadMore(true);
  //   }, []);
  // } else {
  //   useEffect(() => {
  //     setJi(true);
  //   }, []);
  // }
  function my2() {
    dispatch(addItemsCart({ foodName, id, cost, image }));
    dispatch(calculateTotals());
  }
  if (toggle) {
    dispatch(addItemsCart2({ foodName, id, cost, image }));
    dispatch(calculateTotals2());
  } else {
    dispatch(removeItem2(id));
    clearCart2()
  }
  return (
    <div className="key" key={id}>
      <div className="nav2">
        <NavLink onClick={my2} to="/product/zakaz">
          Купить сейчас!
        </NavLink>
        <button onClick={my2}>Добавить в корзину</button>
      </div>
      <h3>{type.toUpperCase()}</h3>
      <div className="centre_cart">
        <button
          onClick={() => {
            dispatch(uiAction2.toggle2())
            dispatch(calculateTotals2());
          }}
        >
          {toggle ? (
            <i className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </button>
        <img src={'http://localhost:4000/graphql/' + image} alt={foodName} />
        <div className="under">
          <h2>{foodName}</h2>
          <h2 className="price">{cost}sum</h2>
        </div>
      </div>
      <div className="desiption">
        <div className="gen">
          <div className="opis" onClick={toggle}>
            <h3>{info}</h3>
            
          </div>
          <div className="btns">
            <NavLink onClick={my2} to="/zakaz">
              Купить сейчас!
            </NavLink>
            <button onClick={my2}>Добавить в корзину</button>
          </div>
        </div>
      </div>
    </div>
  );
}

