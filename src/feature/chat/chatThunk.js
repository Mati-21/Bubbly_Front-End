import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const getChats = createAsyncThunk(
  "chat/getchats",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/chat`);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);
