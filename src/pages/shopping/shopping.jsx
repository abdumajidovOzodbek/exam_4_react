/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import korzinka from "../../../public/image/korzinka.png";
import "./shop.css";
const Shopping = () => {
  return (
    <div className="pusta">
      <img src={korzinka} />
      <h2>Корзина пуста</h2>
      <p>Но это никогда не поздно исправить :</p>
      <NavLink to={"/"} className={"kor"}>
        В каталог товаров
      </NavLink>
    </div>
  );
};

export default Shopping;
