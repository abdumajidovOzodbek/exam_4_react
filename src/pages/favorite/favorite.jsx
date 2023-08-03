/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotals,
  decrease,
  incrase,
  removeItem,
} from "../../store/favoriteData";
import "./favorite.css";
const Favorite = (props) => {
  // eslint-disable-next-line no-unused-vars
  const amount = useSelector((state) => state.dataSlice2.amount);
  // eslint-disable-next-line no-unused-vars
  const { id, cost, foodName, quantity, totalPrice, image } = props.item;
  const dispatch = useDispatch();
  return (
    <>
      <div className="main">
        <button
          onClick={() => {
            dispatch(removeItem(id));
            dispatch(calculateTotals());
          }}
          className="remove"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
        <div>
          <img className="imagecrud" src={'http://localhost:4000/graphql/'+image} alt="" />
          <div>
          <h3>{foodName}</h3>
          <h2>{cost}sum</h2>
          </div>
          
        </div>
        <div className="under_cart">
          <div>
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
            </button>
            <h2>{quantity}x</h2>
            <button
              onClick={() => {
                dispatch(incrase({ id }));
                dispatch(calculateTotals());
              }}
            >
              +
            </button>
          </div>
          <h3>{totalPrice}sum</h3>
        </div>
      </div>
    </>
  );
};

export default Favorite;
