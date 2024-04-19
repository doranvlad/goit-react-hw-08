import { createAsyncThunk } from "@reduxjs/toolkit";
import { goItApi, setToken } from "../../config/api";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credential, thunkApi) => {
    try {
      const { data } = await goItApi.post("/users/signup", credential);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credential, thunkApi) => {
    try {
      const { data } = await goItApi.post("/users/login", credential);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await goItApi.post("/users/logout");
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (savedToken === null) {
      thunkApi.rejectWithValue("no token");
    }

    setToken(savedToken);
    try {
      const { data } = await goItApi.get("/users/current");
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
