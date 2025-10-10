import { colors } from '@/Constants/Color'
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

type Props = {}

const Profile_Top = (props: Props) => {
  return (
    <View style={style.container}>
      <View style={style.info}>
         <Image source={require("@/assets/images/user.png")} style={[{width:50, height:50}]}/>
         <View>
            <Text style={[{color:colors.textColor}]}>Good morning</Text>
            <Text style={[{color:colors.textColor}]}>Heramamo</Text>
         </View>
      </View>
      <View>
        <AntDesign name='bell' size={20} style={[{color:colors.textColor}]}/>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:15,
    alignItems:"center",
  },
  info:{
    flexDirection:"row",
    alignItems:"center"
  }
})

export default Profile_Top