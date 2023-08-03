/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { context } from "../../components/context";

const Speaker = () => {
    const {speaker}=useContext(context)

  return (
    <>
    <h3 className="holder__title">Наушники</h3>
    <div className="holder">
      {speaker.map((e) => (
        <div key={e.id} className="holder_cart">
        <NavLink key={e.id} to={`/${e.id}`}>
        <div key={e.id}>
          <img className="img" src={e.image} alt="" />
          <div>
            <h4>{e.title.toUpperCase()}</h4>
            <h3 className="price">{e.price}T</h3>
          </div>
        </div>
        </NavLink>
        </div>
      ))}
    </div>
    </>
  );
};

export default Speaker;