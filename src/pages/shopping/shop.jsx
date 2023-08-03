// eslint-disable-next-line no-unused-vars
import React from "react";
import { useSelector } from "react-redux";
import ShopCart from "./shopCart";

const Shop = () => {
  const newcart = useSelector((state) => state.dataSlice.items);
  return (
    <div>
      <h2 style={{marginLeft:'100px'}}>YOUR FAVORITES</h2>
      <div className="fav2">
      {newcart.map((item) => (
        <ShopCart key={item.id}
        item={
            {
                id: item.id,
                foodName: item.foodName,
                cost: item.cost,
                image: item.image
            }
        }
        />
      ))}
      </div>
    </div>
  );
};

export default Shop;
