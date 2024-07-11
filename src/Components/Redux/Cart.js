import { createSlice } from "@reduxjs/toolkit";

const INITIALSTATE = {
  cartCount: 0,
  cartList: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState: INITIALSTATE,
  reducers: {
    addToCart: (state, action) => {
      const itemExist = state.cartList.find(
        (item) => item.id === action.payload.id
      );
      if (itemExist) {
        state.cartList.forEach((item) => {
          if (item.id === action.payload.id) {
            item.count = 1;
          }
        });
      } else {
        state.cartList.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    increment: (state, action) => {
      const itemID = action.payload;
      state.cartList.forEach((item) => {
        if (item.id === itemID) {
          item.count++;
        }
      });
    },

    decrement: (state, action) => {
      const itemID = action.payload;
      state.cartList.forEach((item) => {
        if (item.id === itemID) {
          item.count -= 1;

          if (item.count === 0) {
            state.cartList = state.cartList.filter((item) => item.count !== 0);
          }
        }
      });
    },
  },
});

export const { addToCart, increment, decrement } = CartSlice.actions;
export default CartSlice.reducer;
