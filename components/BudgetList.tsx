import { colors } from '@/Constants/Color'
import { getFontSize } from '@/Constants/utils'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import CircularProgressIcon from './ProgressBar'

type Props = {}
const {width, height} = Dimensions.get("window")
const BudgetList = (props: Props) => {
  return (
    <View style={style.container}>
      <View style={style.budgetItem}>
            <View style={style.balance}>
                <CircularProgressIcon/>
                <View>
                    <Text style={{fontSize:15, color:colors.textColor}}>Shopping</Text>
                    <Text style={{fontSize:12, color:colors.grey}}>Limit: 1500</Text>
                </View>
            </View>
            <Text style={[{fontSize:getFontSize(width, "min"), color:colors.textColor}]}>75%</Text>
      </View>
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
export default BudgetList