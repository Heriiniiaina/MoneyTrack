import Balance from '@/components/Balance'
import MyBudget from '@/components/MyBudget'
import Profile_Top from '@/components/Profile_Top'
import RecentTransaction from '@/components/RecentTransaction'
import { colors } from '@/Constants/Color'
import React from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'

type Props = {}
const { height } = Dimensions.get('window')
const TAB_BAR_HEIGHT = height * 0.11
const Home = (props: Props) => {
  return (
    <ScrollView
    style={style.container}
    contentContainerStyle={{ paddingBottom: TAB_BAR_HEIGHT + 20 }} // padding pour éviter d'être caché par la tabBar
    showsVerticalScrollIndicator={true}
  >
    <View style={style.container}>
      <Profile_Top/>
      <Balance/>
      <MyBudget/>
      <RecentTransaction/>
    </View>
  </ScrollView>
    
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.background
  }
})
export default Home