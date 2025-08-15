import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedUsers: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {},
});
