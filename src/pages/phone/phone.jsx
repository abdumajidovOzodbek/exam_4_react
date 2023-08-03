/* eslint-disable no-unused-vars */
import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { context } from "../../components/context";
import {gql,useQuery} from '@apollo/client'
const Phone = () => {
  const { phone } = useContext(context);
  const GET_FOOD = gql`
  query Query {
foods {
  id
  type
  info
  image
  foodName
  cost
  restarantId
}
}
`
console.log(useQuery(GET_FOOD));
  return (
    <>
      <h3 className="holder__title">Чехлы</h3>
      <div className="holder">
        {phone.map((e) => (
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

export default Phone;
