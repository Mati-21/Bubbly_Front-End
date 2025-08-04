import { createSlice } from "@reduxjs/toolkit";
import { getChats } from "./chatThunk";

const initialState = {
  status: "",
  error: "",
  chats: [],
  messages: [],
  activeChat: {},
  files: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {}, // ✅ should be plural: reducers
  extraReducers: (builder) => {
    builder
      .addCase(getChats.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(getChats.fulfilled, (state, action) => {
        state.status = "success";
        state.chats = action.payload;
      })
      .addCase(getChats.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch chats";
      });
  },
});

export default chatSlice.reducer;
