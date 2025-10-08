import { colors } from '@/Constants/Color'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {
    width:number,
    heigth:number,
    fontSize:number
}

const Title = ({heigth,width, fontSize}: Props) => {
  return (
    <View >
      <Text style={[style.title,{fontSize:fontSize}]}>E-Xpense</Text>
    </View>
  )
}

const style = StyleSheet.create({
    title:{
        color:colors.textColor
    }
})
export default Title