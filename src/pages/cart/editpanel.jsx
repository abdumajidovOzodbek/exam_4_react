/* eslint-disable no-unused-vars */
import { gql, useMutation } from "@apollo/client";
import React, { useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
const Edit = () => {
    const { id } = useParams()
    const [foodName, setFoodName] = useState('');
    const [cost, setCost] = useState('');
    const [info, setInfo] = useState('');
console.log(id);
    const update_food = gql`
    mutation Mutation($foodName: String!, $cost: Int!, $info: String!, $updateFoodId: ID!) {
  updateFood(foodName: $foodName, cost: $cost, info: $info, id: $updateFoodId)
}`
    const [updateFood, { data, loading, error }] = useMutation(update_food);


    return (
        <div className="login">
            <div className="login__card">
                <div>
                    <h1>edit food </h1>
                    <label htmlFor="football"></label>
                    <input type="text" placeholder="foodName" id="user" onChange={e => setFoodName(e.target.value)} />
                    <label htmlFor="football"></label>
                    <input
                        type="text"
                        placeholder="cost"
                        id="pass"
                        onChange={e => setCost(e.target.value)}
                    />
                    <label htmlFor="football"></label>
                    <input
                        onChange={e => setInfo(e.target.value)}
                        type="text"
                        placeholder="info"
                        id="pass"
                    />

                    <button id="btn" onClick={async() =>{
                        console.log(data);
                       
                       await updateFood({
                        variables: {
                            foodName: foodName,
                            cost: Number(cost),
                            info: info,
                            updateFoodId: id
                        }
                    }).then(d => alert('updated',d)).catch(error => alert(error.message))}}>
                        edit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Edit;
