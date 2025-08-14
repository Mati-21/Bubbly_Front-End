import { configureStore } from "@reduxjs/toolkit";
import auth from "../feature/auth/authSlice";

import chat from "../feature/chat/chatSlice";
import storage from "redux-persist/es/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const chatPersistConfig = {
  key: "activeChat",
  storage,
  whitelist: ["activeChat"],
};

const chatPersistedReducer = persistReducer(chatPersistConfig, chat);

const store = configureStore({
  reducer: {
    auth,
    chat: chatPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;

export const persistor = persistStore(store);
