import { configureStore } from "@reduxjs/toolkit";
import {
  charactersSlice,
  forumSlice,
  historySlice,
  newsSlice,
  usersSlice,
} from "./slices";

export const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
    users: usersSlice.reducer,
    history: historySlice.reducer,
    comments: forumSlice.reducer,
news: newsSlice.reducer
  },
});
