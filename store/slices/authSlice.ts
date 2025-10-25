import { AUTHUSER } from "@/Constants/authType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USER } from './../../Constants/authType';




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
    updateBlance:(state, action:PayloadAction<{value:number, type:string}>)=>
    {
      if (state.user)
      {
        state.user.balance = action.payload.type == "income" ? (Number(state.user.balance) + action.payload.value).toString() : (Number(state.user.balance) - action.payload.value).toString()
        state.user.income = action.payload.type == "income" ? (Number(state.user.income) + action.payload.value).toString() :  state.user.income
        state.user.expense = action.payload.type == "expense" ? (Number(state.user.expense) + action.payload.value).toString() :  state.user.expense
      }
    },
    updtateVerifiedStatus:(state)=>{
      if (state.user)
        state.user.verified = true
    }
  },
});

export const { setCredentials, logOut, updateBlance } = authSlice.actions;

export default authSlice.reducer;