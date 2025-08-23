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
  onlineUsers: [],
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

    updateOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },

    updateMessage: (state, action) => {
      const incoming = action.payload;

      const exists = state.messages.some((m) => m._id === incoming._id);
      if (!exists) {
        state.messages = [...state.messages, incoming];
      }

      const latestMessage = action.payload;

      let oneconvo = {
        ...action.payload.chat,
        latestMessage,
      };

      let newChats = [...state.chats].filter((convo) => {
        return convo._id !== oneconvo._id;
      });

      console.log(oneconvo);

      newChats.unshift(oneconvo);
      state.chats = newChats;
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

        const latestMessage = action.payload;

        let onechat = {
          ...action.payload.chat,
          latestMessage,
        };
        console.log(onechat);

        let newChats = [...state.chats].filter((chat) => {
          return chat._id !== onechat._id;
        });
        newChats.unshift(onechat);
        state.chats = newChats;
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
export const {
  clearActiveChat,
  addFiles,
  clearChatState,
  updateMessage,
  clearFiles,
  updateOnlineUsers,
} = chatSlice.actions;

export default chatSlice.reducer;
