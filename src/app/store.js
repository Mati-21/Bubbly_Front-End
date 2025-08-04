import { configureStore } from "@reduxjs/toolkit";
import auth from "../feature/auth/authSlice";
import { ImageOff } from "lucide-react";
import chat from "../feature/chat/chatSlice";

const store = configureStore({
  reducer: {
    auth,
    chat,
  },
});

export default store;
