import { BudgetType, TransactionType } from "@/Constants/type";
import { url } from "@/Constants/url";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTransaction = createAsyncThunk<
  TransactionType[],
  string,          
  { rejectValue: string }
>(
  "transaction/fetch",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${url}/transaction/get-transaction/${id}`)
      console.log("eto")
      console.log(res.data.transactions)
      return res.data.transactions as TransactionType[]
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Erreur lors du fetch transactions')
    }
  }
)
export const fetchBudget = createAsyncThunk<BudgetType[], string, {rejectValue:string}>(
  "budget/fetch",
  async (id:string, { rejectWithValue })=>{
    try {
      const res = await axios.get(`${url}/budget/get/${id}`)
      return res.data.budget
    } catch (error:any) {
      return rejectWithValue(error.response?.data || "Error ")
    }
  }
)
