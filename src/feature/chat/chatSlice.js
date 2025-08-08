import { createSlice } from "@reduxjs/toolkit";
import {
  getChats,
  open_create_chat,
  send_Message,
  getMessages,
} from "./chatThunk";

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
  reducers: {
    clearActiveChat: (state) => {
      state.activeChat = {};
    },
    clearChatState: (state) => {
      state.status = "";
      state.error = "";
      state.chats = [];
      state.messages = [];
      state.activeChat = {};
      state.files = [];
    },

    addFiles: (state, action) => {
      state.files = [...state.files, action.payload];
    },
    clearFiles: (state) => {
      state.files = [];
    },
  },
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
      })
      .addCase(open_create_chat.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(open_create_chat.fulfilled, (state, action) => {
        state.status = "success";
        state.activeChat = action.payload;
      })
      .addCase(open_create_chat.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch chats";
      })
      .addCase(send_Message.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(send_Message.fulfilled, (state, action) => {
        state.status = "success";
        state.messages = [...state.messages, action.payload];
      })
      .addCase(send_Message.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch chats";
      })
      .addCase(getMessages.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(getMessages.fulfilled, (state, action) => {
        state.status = "success";
        state.messages = action.payload;
      })
      .addCase(getMessages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch chats";
      });
  },
});
export const { clearActiveChat, addFiles, clearChatState, clearFiles } =
  chatSlice.actions;

export default chatSlice.reducer;
