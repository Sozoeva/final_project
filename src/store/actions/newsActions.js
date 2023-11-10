import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const getNews = createAsyncThunk(
    "getNews", 
  async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}/news`);
      console.log(data);
      return data;
    } catch (error) {
      toast.error(error.response.data);
    }
  });

  export const getNewsById = createAsyncThunk(
    "getNewsById",
    async (id) => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_MAIN_URL}/news/${id}`
        );
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  );

  export const getNewsByCategory = createAsyncThunk(
    "getNewsByCategory",
    async (params, { dispatch }) => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_MAIN_URL}/news`, { params });
            return data;
        } catch (error) {
            console.error(error);
            toast.error("error")
        }
    }
)