/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";
import { restarant } from "../../data";
const CartRes = () => {
  return (
    <>
      <div className="holder">
        {restarant.restarants.map((e) => (
          <div key={e.id} style={{width:"400px"}} className="holder_cart">
            <NavLink key={e.id} to={`/restarant/${e.id}`}>
              <div key={e.id}>
                <img className="img" style={{width:"300px"}} src={'http://localhost:4000/graphql/' +e.image} alt="" />
                <div>
                  <h2>{e.restarantName.toUpperCase()}</h2>
                </div>
                <h3 style={{marginTop:"10px"}} className="price">{e.info}T</h3>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartRes;