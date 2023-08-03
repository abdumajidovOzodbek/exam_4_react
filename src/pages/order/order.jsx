/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import OrderCart from "./orderCart";
import "./order.css";
const Order = () => {
  const newcart = useSelector((state) => state.dataSlice2.items);
  const tot = useSelector((state) => state.dataSlice2.total);
  return (
    <>
    <h4 style={{marginLeft:'250px',fontSize:'20px',marginBottom:'20px'}}>Оформление заказа</h4>
    <div className="jiok">
      <div className="my">
        <div className="head">
          <h2>Курьер по г. Алматы</h2>
          <h3>50000 sum</h3>
        </div>
        <h3 style={{marginLeft:'50px'}}>Адрес доставки</h3>
        <div className="about">
          <input type="text" placeholder="Улица / Район" />
          <div className="inner">
            <div>
              <input type="text" placeholder="Дом" />
              <input type="text" placeholder="Этаж" />
            </div>
            <div>
              <input type="text" placeholder="Подъезд" />
              <input type="text" placeholder="Квартира" />
            </div>
          </div>
          <input type="text" placeholder="Номер телефона" />
          <input type="text" placeholder="имя и очс" />
        </div>
      </div>
      <div className="zakaz">
        <h2 className="name">Ваш заказ</h2>
        {newcart.map((item) => (
          <OrderCart
            key={item.id}
            item={{
              id: item.id,
              foodName: item.foodName,
              quantity: item.quantity,
              cost: item.cost,
              totalPrice: item.totalPrice,
              image: item.image
            }}
          />
        ))}
        <div className="hi">
          <div className="io">
            <h4>Доставка</h4>
            <h4>50000 sum</h4>
          </div>
          <div className="io">
            <h4>К оплате</h4>
            <h4>{tot + 50000} sum</h4>
          </div>
        </div>
        <div className="hel">
          <h2>Способ оплаты</h2>
          <select className="selel">
            <option value="">Предоплата через счет на Kaspi</option>
          </select>
        </div>
        <button className="zaver">Закончить оформление</button>
      </div>
    </div>
    </>
  );
};

export default Order;
