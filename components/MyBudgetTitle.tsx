import { colors } from '@/Constants/Color'
import { getFontSize } from '@/Constants/utils'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'


type Props = {
    width:number,
   
}
const {width} = Dimensions.get("window")

const iconSize = width < 400 ? width * 0.03 : width * 0.05
const MyBudgetTitle = () => {

  return (
    <View style={style.container}>
      <Text style={{color:colors.textColor, fontSize:getFontSize(width, "max")}}>My budgets</Text>
      <TouchableOpacity style={style.btnAdd}>
         <AntDesign name='plus' size={iconSize} style={{color:colors.primary}}/>
      </TouchableOpacity>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        padding:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    btnAdd:{
        width:iconSize + 10,
        height:iconSize + 10,
        backgroundColor:colors.grey,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20
    }
})
export default MyBudgetTitle