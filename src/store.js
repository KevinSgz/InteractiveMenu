import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import cartRedcuer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartRedcuer,
  },
});

export default store;
