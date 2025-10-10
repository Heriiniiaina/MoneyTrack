import Balance from '@/components/Balance'
import Profile_Top from '@/components/Profile_Top'
import { colors } from '@/Constants/Color'
import React from 'react'
import { StyleSheet, View } from 'react-native'

type Props = {}

const Home = (props: Props) => {
  return (
    <View style={style.container}>
      <Profile_Top/>
       <Balance/>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.background
  }
})
export default Home