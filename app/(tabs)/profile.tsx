import { logOut } from '@/store/slices/authSlice'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'

const profile = () => {
  const dispatch = useDispatch()
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
         <View>
           <TouchableOpacity onPress={()=>dispatch(logOut())}>
            <Text>Logout</Text>
           </TouchableOpacity>
         </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default profile