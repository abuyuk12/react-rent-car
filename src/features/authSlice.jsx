import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    firstName: null,
    lastName: null,
    loading: false,
    error: false,
    isAdmin: false,
    token: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.firstName = payload?.user?.first_name;
      state.lastName = payload?.user?.last_name;
      state.isAdmin = payload?.user?.is_superuser;
      state.token = payload?.key;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.firstName = null;
      state.lastName = null;
      state.token = null;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.firstName = payload?.first_name;
      state.lastName = payload?.last_name;
      state.token = payload?.key;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = authSlice.actions;
export default authSlice.reducer;
