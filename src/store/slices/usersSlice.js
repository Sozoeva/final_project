import { createSlice } from "@reduxjs/toolkit";
import { editUser, getUserById, loginUser, registerUser } from "../actions";

const initialState = {
  userInfo: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
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
    [editUser.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});
