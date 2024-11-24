import { combineReducers } from "redux";
import { userReducer } from "./UserReducer/reducer";
import { cartReducer } from "./CartReducer/cart-reducer";

export const rootReducer = combineReducers ({
  // userReducer: userReducer, 
  userReducer,
  // cartReducer: cartReducer,
  cartReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;