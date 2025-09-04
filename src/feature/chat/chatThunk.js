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
export const open_create_chat = createAsyncThunk(
  "chat/open_create",
  async (value, { rejectWithValue }) => {
    try {
      const { receiver_id, isGroup } = value;

      const { data } = await axios.post(`${BACKEND_URL}/chat`, { receiver_id });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const getMessages = createAsyncThunk(
  "chat/getMessages",
  async (chat_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/message/${chat_id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);
export const send_Message = createAsyncThunk(
  "chat/sendMessage",
  async (value, { rejectWithValue }) => {
    try {
      const { files, message, chat_id } = value;
      const { data } = await axios.post(`${BACKEND_URL}/message`, {
        files,
        message,
        chat_id,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const updateAndGetChats = createAsyncThunk(
  "updateChat/getchats",
  async (chat_id, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        `${BACKEND_URL}/chat/markMessageAsRead/${chat_id}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);

export const createGroup = createAsyncThunk(
  "chat/create_Group",
  async (value, { rejectWithValue }) => {
    try {
      const { name, users } = value;
      const { data } = await axios.post(`${BACKEND_URL}/chat/group`, {
        name,
        users,
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.error.message);
    }
  }
);
