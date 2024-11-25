import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: rootReducer,
  // Usei getDefaultMiddleware para manter middlewares padrão e adicionar o logger
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});