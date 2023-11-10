import { createSlice } from "@reduxjs/toolkit";
import { addComment, deleteComment, getComments, getNewsByCategory } from "../actions";

const initialState = {
  comments: [],
};

export const forumSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [addComment.fulfilled]: (state, action) => {
      state.comments = [...state.comments, action.payload];
    },
    [getComments.fulfilled]: (state, action) => {
      state.comments = action.payload;
    },
    [deleteComment.fulfilled]: (state, action) => {
      const newComments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
      state.comments = newComments;
    },
  },
});
