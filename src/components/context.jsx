/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { gql, useQuery } from "@apollo/client";
import React, { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

const context = createContext();

const Context = ({ children }) => {
  const [dron, setDron] = useState([]);
  const [phone, setPhone] = useState([]);
  const [speaker, setSpeaker] = useState([]);
  const [db, setDb] = useState([]);

  const GET_FOOD = gql`
  query Query {
   foods {
    id
   type
   info
    image
  foodName
  cost
  restarant
}
}
`
const GET_RESTARANT= gql`
query Query {
  restarants {
    restarantName
    info
    image
    id
  }
}
`
const food = useQuery(GET_FOOD)
const restarant = useQuery(GET_RESTARANT)
console.log(restarant.data);
  useEffect(() => {
    if(food.data!=undefined){
      localStorage.setItem('data',JSON.stringify(food.data))
    }
    if(restarant.data!=undefined){
      localStorage.setItem('restarant',JSON.stringify(restarant.data))
    }
    // let mana = data.filter((e) => e.type === "dron");
    // setDron(mana);
    // let mana2 = data.filter((e) => e.type === "speaker");
    // setSpeaker(mana2);
    // let mana3 = data.filter((e) => e.type === "holder");
    // setPhone(mana3);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [GET_FOOD, food.data]);
  

  return (
    <context.Provider value={{ dron, db, speaker, phone }}>
      <context.Consumer>{() => children}</context.Consumer>
    </context.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export { context };
export default Context 
