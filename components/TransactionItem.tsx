import { getCardInfo } from '@/Constants/CardUtils'
import { btnColor, colors } from '@/Constants/Color'
import { CardType, TransactionType } from '@/Constants/type'
import { capitalize, getFontSize } from '@/Constants/utils'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { getIconName } from './SelectedComponents'

type Props = {
    transaction:TransactionType
}
const {width, height} = Dimensions.get("window")
const iconSize = width < 400 ? width * 0.04 : width * 0.05
export const getIconType = (category:string)=>{
    const type:CardType = getCardInfo(category)
    if (category == "health")
        return <FontAwesome name='heartbeat' size={iconSize} style={{color:type.color}}/>
    if (category == "bill")
       return <FontAwesome name="money" size={iconSize} style={{color:type.color}} />
    if (category == "shopping")
        return <AntDesign name="shop" size={iconSize} style={{color:type.color}} />
    return <AntDesign name="heart" size={iconSize} style={{color:type.color}} />;
}  
const TransactionItem = ({transaction}: Props) => {
    const backColor = `back${capitalize(transaction.category)}`
  return (
    <View style={style.container}>
       <View style={style.iconType}>
            <View style={[style.icon, {backgroundColor:btnColor[backColor]}]}>
                {getIconName(transaction.category, true)}
            </View>
            <View>
                <Text style={{color:colors.textColor, fontSize:getFontSize(width, "other") - 2}}>{capitalize(transaction.category)}</Text>
                <Text style={{color:colors.textColorTransparent, fontSize:getFontSize(width, "min") - 2}}>{capitalize(transaction.note)}</Text>
            </View>
       </View>
       <View style={{alignItems:"center"}}>
            <Text style={{color:colors.primary, fontSize:getFontSize(width, "other") - 2}}>{transaction.amount}</Text>
            <Text style={{color:colors.textColorTransparent, fontSize:getFontSize(width, "min") - 2}}>05:00PM</Text>
       </View>
    </View>
  )
}
const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:10
    },
    iconType:{
        flexDirection:"row",
        alignItems:"center",
        gap:10
    },
    icon:{
        height:iconSize + 20,
        width:iconSize + 20,
        backgroundColor:colors.grey,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10
    }
})
export default TransactionItem