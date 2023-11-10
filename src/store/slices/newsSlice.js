import { createSlice } from "@reduxjs/toolkit";
import { getNews, getNewsByCategory, getNewsById } from "../actions";

const initialState = {
  news: [],
  selectedNews: null,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: {
    [getNews.fulfilled]: (state, action) => {
      state.news = action.payload;
    },
    [getNewsById.fulfilled]: (state, action) => {
      state.selectedNews = action.payload;
    },
    [getNewsByCategory.fulfilled]: (state, action) => {
      state.news = action.payload;
    },
  },
});
