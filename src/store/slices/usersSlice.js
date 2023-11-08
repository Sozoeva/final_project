import { createSlice } from "@reduxjs/toolkit";
import { getUserById, getUserInfo, loginUser, registerUser } from "../actions";

const initialState = {
  userInfo: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {},
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
    },
    [getUserById.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});
