import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getHistory = createAsyncThunk("getHistory", async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/history`
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  });

  export const getHistoryById = createAsyncThunk(
    "getHistoryById",
    async (id) => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_MAIN_URL}/history/${id}`
        );
        console.log(data);
        return data;
      } catch (error) {
        console.error(error);
      }
    }
  );