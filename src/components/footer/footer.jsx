import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../public/image/logo.svg";
import './footer.css'
const Footer = () => {
  return (
    <>
      <footer>
        <NavLink>
          <img src={logo} alt="" />
        </NavLink>
        <div>
          <div className="ave">
            <NavLink to='shop'>Избранное</NavLink>
            <NavLink to='heart'>Корзина</NavLink>
            <a href='https://t.me/awful_goals'>Контакты</a>
                </div>
        </div>
        <div className="ave2">
          <h2>Условия сервиса</h2>
          <div>
            <h3>Каз</h3>
            <h3>Рус</h3>
            <h3>Eng</h3>
          </div>
        </div>
        <div className="ave3">
         <NavLink><i className="fa-brands fa-vk"></i></NavLink> 
         <a href=""><i className="fa-brands fa-instagram"></i></a>
         <a href="https://t.me/awful_goals"><i className="fa-brands fa-telegram"></i></a>
         <NavLink><i className="fa-brands fa-whatsapp"></i></NavLink>
        </div>
      </footer>
    </>
  );
};

export default Footer;
