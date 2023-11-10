import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk(
  "registerUser",
  async (newUser) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_MAIN_URL}/register`,
        newUser
      );
      localStorage.setItem("id", data?.user?.id)
      localStorage.setItem("token", data.accessToken);
      toast.success("You have successfully registered!");
      return data.user;
    } catch (error) {
      toast.error(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk("loginUser", 
async (newUser) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_MAIN_URL}/login`,
      newUser
    );
    localStorage.setItem("id", data.user.id);
    localStorage.setItem("token", data.accessToken);
    toast.success("You have successfully logged into your account!");
    return data.user;
  } catch (error) {
    toast.error(error.response.data);
  }
});

export const getUserInfo = createAsyncThunk("getUserInfo", async () => {
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_MAIN_URL}/users`,
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    return data;
  } catch (error) {
    toast.error(error.response.data);
  }
});

export const getUserById = createAsyncThunk("getUserById", async () => {
  try {
    const id = localStorage.getItem("id")
    const { data } = await axios.get(
      `${process.env.REACT_APP_MAIN_URL}/users/${id}`
    );
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
});


export const editUser = createAsyncThunk("editUser", async (newData, { dispatch }) => {
  try {

    const { data } = await axios.patch(
      `${process.env.REACT_APP_MAIN_URL}/users/${newData.id}`, newData
    );
    dispatch(getUserById())
    toast.success("You have successfully updated your data!");
    return data;
  } catch (error) {
    console.error(error);
  }
});

