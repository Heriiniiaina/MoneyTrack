import { sortBydate } from '@/Constants/SortByDate'
import { BudgetType } from '@/Constants/type'
import { RootState } from '@/store/store'
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import { useSelector } from 'react-redux'
import BudgetItem from './BudgetItem'
import LineHr from './LineHr'

type Props = {}
const {width, height} = Dimensions.get("window")
const BudgetList = (props: Props) => {
 const budget:BudgetType[] = useSelector((state:RootState)=>state.budget.budget)
 const budgetList:BudgetType[] = sortBydate(budget)
  return (
    <View style={style.container}>
        <BudgetItem/>
        <LineHr/>
        <BudgetItem/>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        padding:20,
        gap:20
    },
    budgetItem:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    balance:{
        flexDirection:"row",
        gap:15
    }
})
export default BudgetList