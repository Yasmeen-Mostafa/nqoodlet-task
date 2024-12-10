import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./features/cards/slice";

const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; // Type for the state
export type AppDispatch = typeof store.dispatch; // Type for dispatch

export default store;
