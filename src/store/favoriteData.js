import { createSlice } from "@reduxjs/toolkit";

const Slice2 = createSlice({
  name: "cart",
  initialState: {
    items: [],
    amount: 0,
    total: 0,
  },
  reducers: {
    addItemsCart: (state, action) => {
      const newItem = action.payload;
      const extingItem = state.items.find((item) => item.id == newItem.id);
      if (!extingItem) {
        state.items.push({
          id: newItem.id,
          cost: newItem.cost,
          foodName: newItem.foodName,
          quantity: 1,
          totalPrice: newItem.cost,
          image: newItem.image
        });
      } else {
        extingItem.quantity++;
        extingItem.totalPrice = extingItem.cost * extingItem.quantity

      }
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id != id);
    },
    incrase: (state, { payload }) => {
      let cartItem = state.items.find((item) => item.id == payload.id);
      cartItem.quantity++;
      cartItem.totalPrice = cartItem.cost * cartItem.quantity
    },
    decrease: (state, { payload }) => {
      const cartItem = state.items.find((item) => item.id == payload.id);
      cartItem.quantity--;
      cartItem.totalPrice = cartItem.cost * cartItem.quantity
    },
    calculateTotals: (state) => {
      var amount = 0;
      var total = 0;
      state.items.forEach((item) => {
        amount += item.quantity;
        total += item.quantity * item.cost;
        // console.log(item.quantity);
      });
      state.total = total
      state.amount = amount
    },
  },
});
export default Slice2;
export const {
  clearCart,
  removeItem,
  incrase,
  decrease,
  addItemsCart,
  calculateTotals,
} = Slice2.actions;
