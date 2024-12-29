import { createSlice } from "@reduxjs/toolkit";

import productData from "../Product";

console.log("productDsatata===>", productData);

const initialState = {
  cart: [],
  items: productData,
  total: 0,
  price: 0,
  text: "Cart",
  textState: true,
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
        
      if (find >= 0) {
        state.cart[find].rating.count += 1;
        state.price += state.cart[find].price;
        state.total += 1;
      } else {
         let output = state.items.findIndex((item) => item.id === action.payload.id);
        state.cart.push(action.payload);
        state.items[output].rating.text = "Added";
        state.total += 1;
        state.price += action.payload.price;
      }
    },
    removeCart: (state, action) => {
      // state.cart = state.cart.filter((item)=> item.id !== action.payload.id)
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      let output = state.items.findIndex((item) => item.id === action.payload.id);
      state.total -= state.cart[find].rating.count;
      state.price -= state.cart[find].rating.count * state.cart[find].price;
      state.items[output].rating.text = "Add to cart";
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    cartText1: (state) => {
      state.textState = false;
      state.text = "Back to Home";
    },

    cartText2: (state) => {
      state.textState = true;
      state.text = "Cart";
    },
    cart1: (state) => {
      
      state.text = "Back to Home";
    },

       decrease: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
        console.log(state.cart[find].rating.count)
      if (state.cart[find].rating.count == 1) {
        
          state.total -= state.cart[find].rating.count;
          state.price -= state.cart[find].rating.count * state.cart[find].price;

          let output = state.items.findIndex((item) => item.id === action.payload.id);
        state.items[output].rating.text = "Add to cart";

        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        
        
      } else {
        state.cart[find].rating.count -= 1;
        state.price -= state.cart[find].price;
        state.total -= 1;
      }
    },

    increase: (state, action) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      state.cart[find].rating.count += 1;
      state.price += state.cart[find].price;
      state.total += 1;
    },
  },
});
export const { addCart, removeCart, cartText1, cartText2, decrease, increase, cart1,} =
  cartSlice.actions;
export default cartSlice.reducer;
