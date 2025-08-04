import { createSlice } from "@reduxjs/toolkit";

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
  reducer: {},
});

export default chatSlice.reducer;
