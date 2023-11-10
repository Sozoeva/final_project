import { createSlice } from "@reduxjs/toolkit";
import { getHistory, getHistoryById } from "../actions";

const initialState = {
  history: [],
  selectedHistory: null
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {},
  extraReducers: {
    [getHistory.fulfilled]: (state, action) => {
      state.history = action.payload;
    },
    [getHistoryById.fulfilled]: (state, action) => {
      state.selectedHistory = action.payload;
    },
  },
});
