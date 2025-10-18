import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBudget } from '../thunks/dataThunks';
import { BudgetType } from './../../Constants/type';


interface BudgetState {
    budget:BudgetType[]
}

const initialState:BudgetState = {
    budget:[]
}

export const budgetSlice = createSlice({
    name:"budget",
    initialState,
    reducers:{
        setBudget:(state, action:PayloadAction<BudgetType[]>)=>{
            state.budget = action.payload
        },
        addBudgets:(state, action: PayloadAction<BudgetType> )=>{
            state.budget.push(action.payload)
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchBudget.pending, (state)=>{

        }).addCase(fetchBudget.fulfilled, (state, action)=>{
            state.budget = action.payload
        }).addCase(fetchBudget.rejected,(state)=>{
            
        })
    }
})
export const {addBudgets, setBudget} = budgetSlice.actions
export default budgetSlice.reducer