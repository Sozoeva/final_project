import { configureStore } from "@reduxjs/toolkit";
import { charactersSlice, usersSlice } from "./slices";

export const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
    users: usersSlice.reducer
  },
});
