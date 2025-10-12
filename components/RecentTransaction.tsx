import { colors } from '@/Constants/Color'
import { getFontSize } from '@/Constants/utils'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import TransactioItem from './TransactioItem'

type Props = {}
const {width, height} = Dimensions.get("window")
const RecentTransaction = (props: Props) => {
  return (
    <View style={style.container}>
      <View style={style.title}>
        <Text style={{color:colors.textColor, fontSize:getFontSize(width, "max")}}>Recent transaction</Text>
        <Text style={{color:colors.textColor, fontSize:getFontSize(width, "min")}}>View all</Text>
      </View>
      <View>
          <TransactioItem type='income' note='Full-time'/>
          <TransactioItem type='expense' note='Full-time'/>
          <TransactioItem type='expense' note='Full-time'/> 
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    paddingHorizontal:20
  },
  title:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  }
})

export default RecentTransaction