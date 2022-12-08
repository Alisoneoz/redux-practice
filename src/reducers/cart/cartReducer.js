import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  totalCount: 0,
  productsList: []
}
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers:{
    addProductToCart:(state, action) => {
      state.productsList = [...state, action.payload]
    },
    cleanCart: (state) => {
      state.totalCount = 0;
      state.productsList = [];
    }
  }
})
export const { addProductToCart, cleanCart } = cartSlice.actions
export default cartSlice.reducer;