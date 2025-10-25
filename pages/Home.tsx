import Balance from '@/components/Balance'
import MyBudget from '@/components/MyBudget'
import Profile_Top from '@/components/Profile_Top'
import RecentTransaction from '@/components/RecentTransaction'
import { colors } from '@/Constants/Color'
import { useUserId } from '@/services/userServices'
import { AppDispatch, RootState } from '@/store/store'
import { fetchBudget, fetchTransaction } from '@/store/thunks/dataThunks'
import React, { useEffect } from 'react'
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
type Props = {}
const { height } = Dimensions.get('window')
const TAB_BAR_HEIGHT = height * 0.11
const Home = (props: Props) => {
  const id:string = useUserId() as string
  const user = useSelector((state:RootState)=>state.auth.user)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(()=>{
    dispatch(fetchTransaction(id))
    dispatch(fetchBudget(id))
  }, [dispatch,id])
  console.log(user)
  return (
    <ScrollView
    style={style.container}
    contentContainerStyle={{ paddingBottom: TAB_BAR_HEIGHT + 20 }}
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