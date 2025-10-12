import { colors } from '@/Constants/Color'
import { getFontSize } from '@/Constants/utils'
import { AntDesign } from '@expo/vector-icons'
import { Href, useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
    text:string,
    route:Href,
    width:number
}


const TitleTransctionComponent = ({route, text, width}: Props) => {
    const router = useRouter()
    const iconSize = width < 400 ? width * 0.05 : 0.10
   
    return (
    <View style={style.container}>
        <View style={{alignItems:"flex-start", flex:1}}>
            <TouchableOpacity onPress={()=>{router.replace(route)}}>
                <AntDesign name='arrow-left' style={{color:colors.textColor}} size={iconSize}/>
            </TouchableOpacity>
        </View>
        <View style={{alignItems:"center", flex:1}}>
            <Text style={{color:colors.textColor, fontSize:getFontSize(width, "max") + 4}}>{text}</Text>
        </View>
        <View style={{alignItems:"flex-end", flex:1}} />
         
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:15
    }
})
export default TitleTransctionComponent