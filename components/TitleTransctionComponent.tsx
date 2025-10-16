import { colors } from '@/Constants/Color'
import { getFontSize } from '@/Constants/utils'
import { AntDesign } from '@expo/vector-icons'
import { Href, useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type Props = {
    text:string,
    route:Href,
    width:number,
    fontSize?:number
}


const TitleTransctionComponent = ({route, text, width, fontSize}: Props) => {
    const router = useRouter()
    const iconSize = width < 400 ? width * 0.05 : width * 0.06
   
    return (
    <View style={style.container}>
        <TouchableOpacity onPress={()=>{router.replace(route)}}>
            <AntDesign name='arrow-left' style={{color:colors.textColor}} size={iconSize}/>
        </TouchableOpacity>

        <View style={style.titleContainer}>
            <Text style={[style.titleText, {fontSize:fontSize ? fontSize : getFontSize(width, "max") + 4}]}>
                {text}
            </Text>
        </View>

        <View style={{width: iconSize}} />
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:15,
    },
    titleContainer: {
        flex: 1, 
        marginHorizontal: 10,
    },
    titleText: {
        color: colors.textColor,
        textAlign: 'center',
    }
})
export default TitleTransctionComponent