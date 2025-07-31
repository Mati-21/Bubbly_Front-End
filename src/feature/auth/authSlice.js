import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, login, registerUser, logout } from "./authThunk";

const initialState = {
  user: null,
  isAuthenticated: false,
  error: "",
  status: "",
  hasLoaded: false,
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.status = "success";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "rejected";
        state.error =
          action.payload || action.error?.message || "Registration failed";
      })

      // Login
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "success";
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "rejected";
        state.isAuthenticated = false;
        state.error = action.payload || action.error?.message || "Login failed";
      })

      // Get Current User
      .addCase(getCurrentUser.pending, (state) => {
        state.status = "loading";
        state.hasLoaded = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.status = "success";
        state.hasLoaded = true;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.status = "rejected";
        state.hasLoaded = true;
      })

      // Logout
      .addCase(logout.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
        state.status = "success";
      })
      .addCase(logout.rejected, (state) => {
        state.status = "rejected";
        state.error = "Logout failed";
      });
  },
});

export default userSlice.reducer;
