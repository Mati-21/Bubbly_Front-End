import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  mobileMenu: false,
  openProfile: false,
  openFullProfile: false,
  createGroup: false,
  showHeaderMenu: false,
  selectedUserProfile: "",
};

export const uiSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setMobileMenu: (state, action) => {
      state.mobileMenu = action.payload;
    },
    setOpenProfile: (state) => {
      state.openProfile = !state.openProfile;
    },
    setOpenFullProfile: (state, action) => {
      state.openFullProfile = action.payload;
    },
    setOpenCreateGroup: (state, action) => {
      state.createGroup = action.payload;
    },
    setCloseCreateGroup: (state, action) => {
      state.createGroup = action.payload;
    },
    setShowHeaderMenu: (state) => {
      state.showHeaderMenu = !state.showHeaderMenu;
    },
    setSelectedUserProfile: (state, action) => {
      state.selectedUserProfile = action.payload;
    },
    closeSelectedUserProfile: (state) => {
      state.selectedUserProfile = null;
    },
  },
});

export const {
  setMobileMenu,
  setOpenProfile,
  setOpenCreateGroup,
  setCloseCreateGroup,
  setOpenFullProfile,
  setShowHeaderMenu,
  setSelectedUserProfile,
  closeSelectedUserProfile,
} = uiSlice.actions;
export default uiSlice.reducer;
