/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import document from '../../../public/image/document.png'
import phone from '../../../public/image/phone.png'
import globe from '../../../public/image/globe.png'
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/ui";
const Navigation = () => {
    const dispatch=useDispatch()
  return (
    <div className="nav">
        <button className="x" onClick={()=>{dispatch(uiAction.toggle())}}>x</button>
      <select className="choose1">
        <option value="">Выбрать модель телефона</option>
      </select>
      <NavLink to='/'>
       <img src={document} alt="" />  Весь каталог
      </NavLink>
      <NavLink to='/shop'>
      <i className="fa-regular fa-heart"></i> Избранное
      </NavLink>
      <NavLink to='term'>
       <img src={document} alt="" />  Условия сервиса
      </NavLink>
      <a href="https://t.me/awful_goals">
       <img src={phone} alt="" /> Контакты
      </a>
      <div>
        <div>
        <img src={globe} alt="" />  <h3> Каз</h3>
        </div>
        <h3>Рус</h3>
        <h3>Eng</h3>
      </div>
    </div>
  );
};

export default Navigation;
