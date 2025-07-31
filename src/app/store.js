import { configureStore } from "@reduxjs/toolkit";
import auth from "../feature/auth/authSlice";

const store = configureStore({
  reducer: {
    auth,
  },
});

export default store;
