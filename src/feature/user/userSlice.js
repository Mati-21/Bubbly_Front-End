import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mobileMenu: false,
  openProfile: false,
  openFullProfile: false,
};

export const userSlice = createSlice({
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
  },
});

export const { setMobileMenu, setOpenProfile, setOpenFullProfile } =
  userSlice.actions;
export default userSlice.reducer;
