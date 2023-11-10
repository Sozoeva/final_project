import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const addComment = createAsyncThunk("addComment", async (newComment) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_MAIN_URL}/comments`,
      newComment
    );
    toast.success("You added a comment!");
    return data;
  } catch (error) {
    toast.error(error.response.data);
  }
});

export const getComments = createAsyncThunk("getComments", async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_MAIN_URL}/comments`
    );
    return data;
  } catch (error) {
    toast.error(error.response.data);
  }
});

export const deleteComment = createAsyncThunk("deleteComment", async (id) => {
  try {
    const { data } = await axios.delete(
      `${process.env.REACT_APP_MAIN_URL}/comments/${id}`
    );
    return id;
  } catch (error) {
    console.error(error);
    toast.error("error");
  }
});

// export const getNews = createAsyncThunk(
//   "getNews", 
// async () => {
//   try {
//     const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}/news`);
//     console.log(data);
//     return data;
//   } catch (error) {
//     toast.error(error.response.data);
//   }
// });
