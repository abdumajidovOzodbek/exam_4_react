import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    
  name: "cart2",
  initialState: {
    items: [],
    amount: 0,
    total: 0,
  },
  reducers: {
    addItemsCart2: (state, action) => {
      const newItem = action.payload;
      const extingItem = state.items.find((item) => item.id == newItem.id);
      if (!extingItem) {
        state.items.push({
          id: newItem.id,
          cost: newItem.cost,
          foodName: newItem.foodName,
          quantity: 1,
          totalPrice: newItem.cost,
          image: newItem.image,
        });
      } else {
        
        extingItem.totalPrice = extingItem.cost * extingItem.quantity;
      }
    },
    clearCart2: (state) => {
      state.items = [];
    },
    removeItem2: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id != id);
    },
    incrase2: (state, { payload }) => {
      let cartItem = state.items.find((item) => item.id == payload.id);
      cartItem.quantity++;
      cartItem.totalPrice = cartItem.cost * cartItem.quantity;
    },
    decrease2: (state, { payload }) => {
      const cartItem = state.items.find((item) => item.id == payload.id);
      cartItem.quantity--;
      cartItem.totalPrice = cartItem.cost * cartItem.quantity;
    },
    calculateTotals2: (state) => {
      var amount = 0;
      var total = 0;
      state.items.forEach((item) => {
        amount += item.quantity;
        total += item.quantity * item.cost;
        // console.log(item.quantity);
      });
      state.total = total;
      state.amount = amount;
    },
  },
});
export default Slice;
export const {
  clearCart2,
  removeItem2,
  incrase2,
  decrease2,
  addItemsCart2,
  calculateTotals2,
} = Slice.actions;
