import { createSlice } from "@reduxjs/toolkit";
import {
  getChats,
  open_create_chat,
  send_Message,
  getMessages,
  updateAndGetChats,
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
    clearHistory: (state) => {
      state.status = "";
      state.error = "";
      state.chats = [];
      state.messages = [];
      state.activeChat = {};
      state.files = [];
      state.onlineUsers = [];
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

    updateChatsOrder: (state, action) => {
      state.chats = [...state.chats, action.payload];
    },

    updateMessage: (state, action) => {
      const incoming = action.payload;

      console.log(incoming.chat);
      const users = incoming.chat.users.map((user) => user._id);

      const exists = state.messages.some((m) => m._id === incoming._id);
      const checkActive = state.activeChat._id === action.payload.chat._id;

      if (!exists && checkActive) {
        const brandnewMessage = {
          ...incoming,
          readby: [...users],
        };
        console.log(brandnewMessage);
        state.messages = [...state.messages, brandnewMessage];
      }

      const latestMessage = action.payload;

      const currentChat = state.chats.find(
        (chat) => chat._id === action.payload.chat._id
      );

      let unreadCount = currentChat?.unreadCount;

      if (!checkActive) {
        if (unreadCount) {
          unreadCount = unreadCount + 1;
        } else {
          unreadCount = 1;
        }
      }

      let oneconvo = {
        ...action.payload.chat,
        latestMessage,
        unreadCount: unreadCount || null,
      };
      console.log(oneconvo);

      let newChats = [...state.chats].filter((convo) => {
        return convo._id !== oneconvo._id;
      });

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
      })
      .addCase(updateAndGetChats.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(updateAndGetChats.fulfilled, (state, action) => {
        state.status = "success";
        state.chats = action.payload;
      })
      .addCase(updateAndGetChats.rejected, (state, action) => {
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
  clearHistory,
  updateOnlineUsers,
  updateChatsOrder,
} = chatSlice.actions;

export default chatSlice.reducer;
