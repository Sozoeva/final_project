import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCharacters = createAsyncThunk(
  "getCharacters", 
  async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_MAIN_URL}/characters`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
});

export const getCharacterById = createAsyncThunk(
  "getCharactersById",
  async (id) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/characters/${id}`
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);
