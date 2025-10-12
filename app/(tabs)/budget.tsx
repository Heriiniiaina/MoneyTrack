import BudgetPage from '@/pages/BudgetPage'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const budget = () => {
  return (
  <SafeAreaProvider>
        <SafeAreaView style={{flex:1}}>
            <BudgetPage/>
        </SafeAreaView>
      </SafeAreaProvider>
  )
}

export default budget