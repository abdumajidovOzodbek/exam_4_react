/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { context } from "../../components/context";
import { uiAction2 } from "../../store/toogle";
import './holder.css'
import { data } from "../../data";

const Holder = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const dron = data.foods.filter(food => food.restarant.id == id)
  console.log(dron);
  return (
    <>
      <h3 className="holder__title"></h3>
      <div className="holder">
        {dron.map((e) => (
          <div className="holder_cart" key={e.id}>
            <NavLink onClick={() => {
              dispatch(!uiAction2.toggle2())
            }} key={e.id} to={`/${e.id}`}>
              <div key={e.id}>
                <img className="img" src={'http://localhost:4000/graphql/' + e.image} alt="" />
                <div>
                  <h4>{e.foodName.toUpperCase()}</h4>
                </div>
                <h3 className="price">{e.cost}sum</h3>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Holder;
