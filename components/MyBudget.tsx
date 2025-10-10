import { colors } from '@/Constants/Color'
import { getFontSize } from '@/Constants/utils'
import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {}

const {width} = Dimensions.get("window")
const MyBudget = (props: Props) => {
  return (
    <View style={style.container}>
        <View style={style.titleBudget}>
            <Text style={[{fontSize:getFontSize(width, "max"), color:colors.textColor}]}>My budget</Text>
            <TouchableOpacity>
                <Text style={[{fontSize:getFontSize(width, "min"), color:colors.textColor}]}>View all</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        padding:20
    },
    titleBudget:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})
export default MyBudget