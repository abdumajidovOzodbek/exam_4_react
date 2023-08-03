/* eslint-disable no-unused-vars */
import { gql, useMutation } from "@apollo/client";
import React, { useRef, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { restarant } from "../../data";
const Create = () => {
    const [foodName, setFoodName] = useState('');
    const [restarantName, setRestarantName] = useState('');
    const [cost, setCost] = useState('');
    const [info, setInfo] = useState('');
    const [info2, setInfo2] = useState('');
    const [image, setImage] = useState({});
    const [image2, setImage2] = useState({});
    const [type, setType] = useState('');
    const [res, setRes] = useState('1');
    const update_food = gql`
   mutation Mutation($foodName: String!, $info: String!, $image: Upload!, $cost: Int!, $type: Types!, $restarant: ID!) {
  createFood(foodName: $foodName, info: $info, image: $image, cost: $cost, type: $type, restarant: $restarant) {
    status
    message
    data
  }
}

`
const create=gql`
mutation Mutation($restarantName: String!, $info: String!, $image: Upload!) {
  createRestarant(restarantName: $restarantName, info: $info, image: $image)
}`


    const [createFood, { data, loading, error }] = useMutation(update_food,{
        onCompleted:data=> console.log(error)
    });
    const [createRestarant] = useMutation(create,{
        onCompleted:data=> console.log(error)
    });

    return (
        <>
            <div className="login">
                <div className="login__card">
                    <div>
                        <h1>Create food </h1>
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
                        <input type="file" required onChange={(e) => setImage(e.target.files[0])} />
                        <select onChange={(e) => setType(e.target.value)} name="" id="">
                            <option value="fast_foods">fast_foods</option>
                            <option value="barbeque">barbeque</option>
                            <option value="sweat">sweat</option>
                            <option value="salad">salad</option>
                            <option value="soups">soups</option>
                        </select>
                        <select onChange={(e) => setRes(e.target.value)} name="" id="">
                            {restarant.restarants.map(e=>{
                                
                                return(<>
                                 <option  value={e.id}>{e.restarantName}</option>
                                </>
                                   
                                )
                            })}
                        </select>
                        <button id="btn" onClick={async () => {

// console.log(image);
// console.log(await createFood({
//     variables: {
//         foodName: foodName,
//         cost: Number(cost),
//         info: info,
//         type: type,
//         restarant: res,
//         image
//     }
// }).then(d => alert('updated', d)).catch(error => alert(error))
// );
console.log(res);
                           await createFood({
                                variables: {
                                    foodName: foodName,
                                    cost: Number(cost),
                                    info: info,
                                    type: type,
                                    restarant: res,
                                    image
                                }
                            }).then(d => alert('updated', d)).catch(error => alert(error.message))
                        }}>
                            Create
                        </button>
                    </div>
                </div>
            </div>
            <div className="login">
                <div className="login__card">
                    <div>
                        <h1>Create food </h1>
                        <label htmlFor="football"></label>
                        <input type="text" placeholder="restarantName" id="user" onChange={e => setRestarantName(e.target.value)} />
                        <label htmlFor="football"></label>
                     
                        <label htmlFor="football"></label>
                        <input
                            onChange={e => setInfo2(e.target.value)}
                            type="text"
                            placeholder="info"
                            id="pass"
                        />
<input type="file" onChange={(e)=>setImage2(e.target.files[0])} />
                        <button id="btn" onClick={async () => {

                            await createRestarant({
                                variables: {
                                    restarantName: restarantName,
                                    info: info2,
                                    image:image2
                
                                }
                            }).then(d => alert('created', d)).catch(error => alert(error.message))
                        }}>
                            Create
                        </button>
                    </div>
                </div>
            </div>
            </>
    );
};

export default Create;
