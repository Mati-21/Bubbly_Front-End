import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.withCredentials = true;

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/auth/verifyUser`);
      return response.data; // user object
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Not authenticated"
      );
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BACKEND_URL}/auth/register`, value);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BACKEND_URL}/auth/login`, value);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${BACKEND_URL}/auth/logout`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
