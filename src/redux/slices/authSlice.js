import { createSlice } from "@reduxjs/toolkit";
import { STORAGE } from "../../configs";

export const initialState = {
  user: {},
  token: localStorage.getItem(STORAGE.token) || "",
  is_loading: false,
};

const Slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.is_loading = false;
    },
    setToken: (state, action) => {
      localStorage.setItem(STORAGE.token, action.payload);
      state.is_loading = false;
      state.token = action.payload;
    },
    setUserToken: (state, action) => {
      localStorage.setItem(STORAGE.token, action.payload.token);
      localStorage.setItem(STORAGE.userId, action.payload.userId);
      state.user.userId = action.payload.userId;
      state.token = action.payload.token;
      state.is_loading = false;
    },
    logout: (state) => {
      localStorage.clear();
      state.user = {};
      state.token = "";
      state.is_loading = false;
    },
  },
});

export const { setUser, setToken, setUserToken, logout } = Slice.actions;

export default Slice.reducer;
