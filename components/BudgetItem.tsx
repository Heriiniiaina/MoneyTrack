import { colors } from '@/Constants/Color'
import { BudgetType } from '@/Constants/type'
import { calculPercent, capitalize, getFontSize } from '@/Constants/utils'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import CircularProgressIcon from './ProgressBar'

type Props = {
    budget:BudgetType
}

const {width, height} = Dimensions.get("window")
const BudgetItem = ({budget}: Props) => {
    const progress = calculPercent(Number(budget.amount), Number(budget.used))
  return (
     <View style={style.budgetItem}>
               <View style={style.balance}>
                   <CircularProgressIcon budget={budget} progress={progress}/>
                   <View>
                       <Text style={{fontSize:getFontSize(width,"max") - 3, color:colors.textColor}}>{capitalize(budget.category)}</Text>
                       <Text style={{fontSize:getFontSize(width,"min") - 2, color:colors.grey}}>Limit: {budget.amount}</Text>
                   </View>
               </View>
               <Text style={[{fontSize:getFontSize(width, "min"), color:colors.textColor}]}>{progress.toFixed(2)}%</Text>
         </View>
  )
}
const style = StyleSheet.create({
    container:{
        padding:20
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
export default BudgetItem