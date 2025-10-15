import TransactionPage from '@/pages/TransactionPage'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const transaction = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex:1}}>
      <TransactionPage/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default transaction