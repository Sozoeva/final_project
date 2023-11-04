import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../actions";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    userInfo: null,
  },
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
    },
    [loginUser.fulfilled]: (state,action) => {
      state.userInfo = action.payload
    }
  },
});