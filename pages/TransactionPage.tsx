import TitleTransctionComponent from '@/components/TitleTransctionComponent'
import TransactionList from '@/components/TransactionList'
import { colors } from '@/Constants/Color'
import { getFontSize } from '@/Constants/utils'
import { EvilIcons } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, TextInput, View } from 'react-native'

type Props = {}

const {width, height} = Dimensions.get("window")
const TAB_BAR_HEIGHT = height * 0.11;
const iconSize = width < 400 ? width* 0.06 : width * 0.07
const TransactionPage = (props: Props) => {
  return (
     <ScrollView
          style={style.container}
          contentContainerStyle={{ paddingBottom: TAB_BAR_HEIGHT + 20 }}
          showsVerticalScrollIndicator={true}
        >
              <View style={style.container}>
        <TitleTransctionComponent route={"/(tabs)"} text='Transaction' width={width}/>
        <View style={style.search}>
            <EvilIcons name='search' size={iconSize} style={style.icon}/>
            <TextInput style={style.textInput} placeholder='Search transaction' placeholderTextColor={colors.textColorTransparent}/>
        </View>
        <View>
            <TransactionList/>
        </View>
    </View>
        </ScrollView>
  
  )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.background
    },
    search:{
        position:"relative"
    },
    textInput:{
        height:height * 0.07,
       
        backgroundColor:colors.grey,
        borderRadius:10,
        paddingLeft:iconSize + 5,
        color:colors.textColor,
        fontSize:getFontSize(width, "min") + 2
    },
    icon:{
        color:colors.textColorTransparent,
        position:"absolute",
        top:(height * 0.07) * 0.25,
        left:"1%",
        zIndex:99
    }
})
export default TransactionPage