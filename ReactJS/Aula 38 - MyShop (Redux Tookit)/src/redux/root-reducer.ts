import { combineReducers } from "redux";
import { userSlice } from "./User/user-slice";
import { cartSlice } from "./Cart/cart-slice";

export const rootReducer = combineReducers ({
  userReducer: userSlice.reducer,  cartReducer: cartSlice.reducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;