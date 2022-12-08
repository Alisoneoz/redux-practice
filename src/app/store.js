import { configureStore } from "@reduxjs/toolkit";

//Reducers
import userReducer from "../reducers/user/userReducer";
import cartReducer from "../reducers/cart/cartReducer";

const store = configureStore({
  reducer:{
    user: userReducer,
    cart: cartReducer,
  },
})

export default store;