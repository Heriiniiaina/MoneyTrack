import { colors } from '@/Constants/Color'
import { getFontSize } from '@/Constants/utils'
import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import SelectedComponents, { SelectedType } from './SelectedComponents'

type Props = {}
const categoryList: SelectedType[] = [
  {
    name: "health",
    value: "health",
  },
  {
    name: "transport",
    value: "transport",
  },
  {
    name: "shopping",
    value: "shopping",
  },
  {
    name: "bill",
    value: "bill",
  },
  {
    name: "others",
    value: "others",
  },
];
const {width, height} = Dimensions.get("window")
const NewExpense = (props: Props) => {
  const [category, setCategory] = useState("")
  return (
    <View style={style.container}>
      <View style={{gap:5}}>
        <Text style={{fontSize:getFontSize(width, "other") - 2, color:colors.textColor}}>Amount</Text>
        <TextInput style={style.textInput} />
      </View>
      <View>
        <Text>Category</Text>
        <SelectedComponents item={categoryList} selected={category} setSelected={setCategory}/>
      </View>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    padding:10
  },
  textInput:{
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 5,
    borderRadius: 10,
    color: colors.primary,
    fontSize: getFontSize(width, "min"),
    height: height * 0.05,
  }
})
export default NewExpense