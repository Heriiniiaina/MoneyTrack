import { AUTHUSER, USER } from "@/Constants/authType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";




const initialState: AUTHUSER = {
  token: null,
  isAuthenticiated: false,
  user:null
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ token: string; user: USER}>
    ) => {
      state.token = action.payload.token;
      state.user = action.payload.user
      state.isAuthenticiated = true;
    },

    logOut: (state) => {
      state.token = null;
      state.isAuthenticiated = false;
      state.user = null
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;