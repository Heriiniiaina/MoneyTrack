import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import BudgetItem from './BudgetItem'
import LineHr from './LineHr'

type Props = {}
const {width, height} = Dimensions.get("window")
const BudgetList = (props: Props) => {
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