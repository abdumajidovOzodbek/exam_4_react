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
import { NavLink } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
const Crud2 = (props) => {
    // eslint-disable-next-line no-unused-vars
    const amount = useSelector((state) => state.dataSlice2.amount);
    // eslint-disable-next-line no-unused-vars
    const { id, cost, foodName, quantity, totalPrice, image, info } = props.item;
    const dispatch = useDispatch();
    const delete_food = gql`
 mutation Mutation($deleteFoodId: ID!) {
  deleteFood(id: $deleteFoodId)
}


  `
    const [deleteFood, { data }] = useMutation(delete_food)
    return (
        <>
            <div className="main">
                <button
                    onClick={async () => {
                        await deleteFood({ variables: { deleteFoodId: id.toString() } })
                        dispatch(removeItem(id));
                        dispatch(calculateTotals());
                    }}
                    className="remove"
                >

                    <i className="fa-solid fa-trash"></i>

                </button>
                <NavLink to={`/${id}`} className="remove2"><i className="fas fa-edit"></i></NavLink>
                <div>
                    <img className="imagecrud" src={'http://localhost:4000/graphql/' + image} alt="" />
                    <div>
                        <h3>{info}</h3>
                        <h2>{cost}sum</h2>
                    </div>

                </div>
                <p style={{ color: "red" }}><b>{foodName}</b></p>
            </div>
        </>
    );
};

export default Crud2;
