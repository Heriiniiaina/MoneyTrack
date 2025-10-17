import { colors } from '@/Constants/Color'
import { sortBydate } from '@/Constants/SortByDate'
import { TransactionType } from '@/Constants/type'
import { getFontSize } from '@/Constants/utils'
import { RootState } from '@/store/store'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import TransactioItem from './TransactioItem'

type Props = {}
const {width, height} = Dimensions.get("window")
const RecentTransaction = (props: Props) => {
  const transaction:TransactionType[] = useSelector((state:RootState)=>state.transaction.transaction)

  const recent = sortBydate(transaction).slice(0,2)
 
  return (
    <View style={style.container}>
      <View style={style.title}>
        <Text style={{color:colors.textColor, fontSize:getFontSize(width, "max")}}>Recent transaction</Text>
        <Text style={{color:colors.textColor, fontSize:getFontSize(width, "min")}}>View all</Text>
      </View>
      <View>
          {
            recent.map((tr, index)=>(
              <TransactioItem transactions={tr} type='income' note='okay' key={index}/>
            ))
          }
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