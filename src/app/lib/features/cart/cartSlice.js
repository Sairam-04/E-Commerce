"use client";

import { createSlice } from "@reduxjs/toolkit";
import { Bounce, toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      const alreadyExists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (alreadyExists && alreadyExists?.quantity < action.payload?.stock) {
        alreadyExists.quantity += 1;
      } else {
        state.cartItems.push(action.payload);
      }
    },
    addQuantity: (state, action) => {
      if (action.payload?.quantity + 1 < action.payload?.stock) {
        const data = state.cartItems.find(
          (item) => item.id === action.payload.id
        );
        data.quantity += 1;
      } else {
        toast.error(`You can add max upto ${action.payload?.stock} items`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          transition: Bounce,
        });
      }
    },
    subQuantity: (state, action) => {
      if (action.payload?.quantity - 1 !== 0) {
        const data = state.cartItems.find(
          (item) => item.id === action?.payload.id
        );
        data.quantity -= 1;
      } else {
        state.cartItems = state.cartItems.filter(
          (ele) => ele.id !== action.payload?.id
        );
      }
    },
    removeItem: (state, action) => {
      const filteredItems = state.cartItems.filter((item) => {
        return item.id.toString() !== action.payload?.id;
      });
      state.cartItems = filteredItems;
    },
    clearCart: (state) => {
      state.cartItems.length = 0;
    },
  },
});

export const { addItem, addQuantity, subQuantity, removeItem, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
