import Balance from '@/components/Balance'
import MyBudget from '@/components/MyBudget'
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
      <MyBudget/>
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