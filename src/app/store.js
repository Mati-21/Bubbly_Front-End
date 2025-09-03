import { configureStore } from "@reduxjs/toolkit";
import auth from "../feature/auth/authSlice";
import ui from "../feature/ui/ui.js";

import chat from "../feature/chat/chatSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import sessionStorage from "redux-persist/es/storage/session";

const chatPersistConfig = {
  key: "activeChat",
  storage: sessionStorage,
  whitelist: ["activeChat"],
};

const chatPersistedReducer = persistReducer(chatPersistConfig, chat);

const store = configureStore({
  reducer: {
    auth,
    chat: chatPersistedReducer,
    ui,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

export const persistor = persistStore(store);
