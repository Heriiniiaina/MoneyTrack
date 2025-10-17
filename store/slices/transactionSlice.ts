import { TransactionType } from '@/Constants/type';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchTransaction } from '../thunks/dataThunks';


interface TransactionState{
    transaction:TransactionType[]
}
const initialState:TransactionState = {
    transaction:[]    
}
export const transactionSlice = createSlice({
    name:"transaction",
    initialState,
    reducers:{
        setTransaction:(state= initialState, action: PayloadAction<TransactionType[]>)=>{
            state.transaction = action.payload
        },
        addTransactions:(state:TransactionState, action:PayloadAction<TransactionType>)=>{
            state.transaction.push(action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTransaction.pending, (state)=>{
            
        }).addCase(fetchTransaction.fulfilled, (state, action)=>{
            state.transaction = action.payload
        }).addCase(fetchTransaction.rejected, (state)=>{
            
        })
    }
})

export const {addTransactions, setTransaction} = transactionSlice.actions
export default transactionSlice.reducer